import { BACKEND_URL } from "@/config";

export async function getExistingShapes(roomId: string, readOnly?: boolean) {
    let url = `${BACKEND_URL}/api/designs/${roomId}/chats`;
    if (readOnly) {
        url += '?readonly=1';
    }
    const options: RequestInit = { credentials: 'include' };
    
    const response = await fetch(url, options);
    const data = await response.json();
    const messages = data.messages || [];

    const shapes = messages.map((x: { message: string }) => {
        const messageData = JSON.parse(x.message);
        return messageData.shape;
    });

    return shapes;
}