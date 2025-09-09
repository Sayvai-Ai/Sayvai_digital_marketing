// src/components/ChatBot/ChatBot.tsx
import React, { useState, useEffect, useRef } from "react";
import { chatData } from "./ChatData"; // ensure your file is named chatData.ts
import "./ChatBot.css";

// Jaccard similarity function
function jaccardSimilarity(str1: string, str2: string): number {
  const a = new Set(str1.toLowerCase().split(" "));
  const b = new Set(str2.toLowerCase().split(" "));
  const intersection = new Set([...a].filter((x) => b.has(x)));
  const union = new Set([...a, ...b]);
  return intersection.size / union.size;
}

// Find best answer from chatData
function findBestAnswer(userInput: string): string {
  let bestScore = 0;
  let bestAnswer = "Sorry, I didn't understand that. Can you rephrase?";
  chatData.forEach((item) => {
    item.questions.forEach((q) => {
      const score = jaccardSimilarity(userInput, q);
      if (score > bestScore) {
        bestScore = score;
        bestAnswer = item.answer;
      }
    });
  });
  return bestAnswer;
}

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [showGif, setShowGif] = useState(true);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user's message
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    // Get bot's reply
    const botReply = findBestAnswer(input);
    setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);

    // Hide welcome GIF after first user message
    if (showGif) setShowGif(false);

    // Clear input
    setInput("");
  };

  // Scroll to latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className="fixed bottom-6 right-6 bg-gradient-to-br from-[#00C0A3] to-[#00FFA3] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50 pulse"
        onClick={() => {
          setOpen(!open);
          if (!open) setShowGif(true); // show GIF each time the chat opens
        }}
      >
        🤖
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-20 right-6 w-96 h-[30rem] bg-white shadow-2xl rounded-2xl flex flex-col z-50 transition-transform duration-500 ${
          open ? "translate-y-0 opacity-100 animate-chat-slide" : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        {/* Chat Header */}
        <div className="bg-[#00C0A3] text-white p-3 rounded-t-xl font-semibold flex items-center justify-center shadow-md">
          Sayvai Bot
        </div>

        {/* Messages Container */}
        <div className="flex-1 p-4 overflow-auto relative">
          {/* Welcome GIF */}
          {showGif && (
            <div
              className={`absolute inset-0 flex items-center justify-center bg-white/70 rounded-xl animate-fadeIn ${
                !showGif ? "fade-out" : ""
              }`}
            >
              <img src="/Welcome.gif" alt="Welcome" className="w-35 h-35" />
            </div>
          )}

          {/* Messages */}
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-2 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <p
                className={`inline-block p-2 max-w-[70%] rounded-2xl shadow-md ${
                  msg.sender === "user"
                    ? "bg-gradient-to-br from-[#00C0A3] to-[#00FFA3] text-white fade-in-right"
                    : "bg-gray-200 text-black fade-in-left"
                }`}
              >
                {msg.text}
              </p>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Input */}
        <div className="p-2 flex border-t border-gray-200">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 p-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-[#00C0A3]"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSend}
            className="bg-[#00C0A3] text-white p-2 rounded-r-full hover:bg-[#00e0b0] transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
