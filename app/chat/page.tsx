"use client";

import ChatWidget from "@/components/ChatWidget";

export default function ChatPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(1000px 600px at 50% -20%, #e5e7eb 0%, transparent 60%)",
        padding: 16,
      }}
    >
      <ChatWidget />
    </main>
  );
}
