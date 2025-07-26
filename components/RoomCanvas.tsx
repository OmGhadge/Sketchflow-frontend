"use client";

import { useEffect, useRef, useState } from "react"
import { Canvas } from "./Canvas";
import { WS_URL, BACKEND_URL } from "@/config";
import { useSearchParams } from "next/navigation";

export default function RoomCanvas({roomId}:{roomId:string}){
    const searchParams = useSearchParams();
    const isReadOnly = searchParams.get('readonly') === '1';
    const [socket,setSocket]=useState<WebSocket | null>(null);
    const [wsError, setWsError] = useState<string>("");
    const [isLoading, setIsLoading] = useState(true);
    const everConnected = useRef(false);
    const errorTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
      let ws: WebSocket | null = null;
      let cancelled = false;
      
      async function tryConnect() {
        if (cancelled) return;
        
        try {
         
          const tokenRes = await fetch(`${BACKEND_URL}/api/auth/me`, {
            credentials: 'include',
          });
          
          if (!tokenRes.ok) {
            setWsError("Authentication required. Please sign in.");
            setIsLoading(false);
            return;
          }
          
          const userData = await tokenRes.json();
          const token = userData.token; 
          
          if (!token) {
            setWsError("No authentication token found. Please sign in.");
            setIsLoading(false);
            return;
          }
          
         
          let wsUrl = `${WS_URL}?token=${encodeURIComponent(token)}`;
          if (isReadOnly) {
            wsUrl += '&readonly=1';
          }
          
          setWsError("");
          ws = new WebSocket(wsUrl);
          
          ws.onopen = () => {
            console.log("[RoomCanvas] WebSocket opened");
            setSocket(ws!);
            setIsLoading(false);
            everConnected.current = true;
            ws!.send(JSON.stringify({
              type: "join_room",
              roomId: Number(roomId)
            }));
          };
          
          ws.onmessage = (event) => {
            console.log("[RoomCanvas] WebSocket message:", event.data);
          };
          
          ws.onclose = (event) => {
            console.log("[RoomCanvas] WebSocket closed", event);

            if (!everConnected.current && event.code !== 1001) {
              if (errorTimeout.current) clearTimeout(errorTimeout.current);
              errorTimeout.current = setTimeout(() => {
                setWsError(`WebSocket connection was closed. Please ensure you are signed in and have access to this room. ${event.reason}`);
              }, 200); 
            }
          };
          
          ws.onerror = (err) => {
            console.log("[RoomCanvas] WebSocket error", err);
           
            if (!everConnected.current) {
              if (errorTimeout.current) clearTimeout(errorTimeout.current);
              errorTimeout.current = setTimeout(() => {
                setWsError("WebSocket connection error. Please try again or sign in.");
              }, 200);
            }
          };
          
        } catch (error) {
          console.error("[RoomCanvas] Error getting token:", error);
          setWsError("Failed to authenticate. Please sign in again.");
          setIsLoading(false);
        }
      }
      
      tryConnect();
      
      return () => {
        cancelled = true;
        if (ws && ws.readyState === WebSocket.OPEN) {
          ws.close();
        }
        if (errorTimeout.current) clearTimeout(errorTimeout.current);
      };
    }, [roomId, isReadOnly]);

    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-full">
          <div>Connecting to server...</div>
        </div>
      );
    }

    if (wsError) {
      return (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-red-600 font-semibold mb-4">{wsError}</div>
          <button onClick={() => window.location.href = '/signin'} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Sign In</button>
        </div>
      );
    }

    if(!socket){
        return (
            <div>connecting to server...</div>
        )
    }
    return(
        <div>
            <Canvas roomId={Number(roomId)} socket={socket} readOnly={isReadOnly}/>
        </div>
    )
}