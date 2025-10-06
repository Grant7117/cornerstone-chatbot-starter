"use client";
import { useState } from "react";
import ChatWidget from "./ChatWidget";

export default function ChatLauncher({ offsetPx = 200 }: { offsetPx?: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && <ChatWidget onClose={() => setOpen(false)} />}

      {!open && (
        <div className="chat-welcome p-3 bg-white rounded-lg shadow-md mr-16">
          I am here to help. Ask me a question.
        </div>
      )}

      <button
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((v) => !v)}
        className="chat-launcher h-16 w-16 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center"
      >
        {open ? (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M3 12c0-4.418 4.03-8 9-8s9 3.582 9 8-4.03 8-9 8a10.9 10.9 0 0 1-3.9-.7L3 21l1.2-3.2A8.6 8.6 0 0 1 3 12Z" fill="currentColor"/>
          </svg>
        )}
      </button>
    </div>
  );
}