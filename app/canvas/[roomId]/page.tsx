"use client";
import RoomCanvas from "@/components/RoomCanvas";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { BACKEND_URL } from "@/config";
export default function CanvasPage({ params }: { params: { roomId: string } }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isReadOnly = searchParams.get('readonly') === '1';
  useEffect(() => {
    if (!isReadOnly) {
      async function checkAuth() {
        const res = await fetch(`${BACKEND_URL}/api/auth/me`, { credentials: 'include' });
        if (!res.ok) {
          router.push(`/signin?redirect=${encodeURIComponent(window.location.pathname)}`);
        }
      }
      checkAuth();
    }
  }, [router, isReadOnly]);
  const roomId = params.roomId;
  return(
    <div>
      <RoomCanvas roomId={roomId} />
    </div>
  )
}
