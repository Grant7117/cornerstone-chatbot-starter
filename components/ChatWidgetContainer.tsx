"use client";

import { useState } from "react";
import ChatWidget from "./ChatWidget";

export function ChatWidgetContainer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}>
      {isOpen ? (
        <ChatWidget />
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open chatbot"
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      )}
    </div>
  );
}
