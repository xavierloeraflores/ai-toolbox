"use client";
import { useChat } from "@ai-sdk/react";
import { Input } from "~/components/ui/input";
import { ChatBubble } from "./chat-bubble";
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="stretch mx-auto flex w-full max-w-md flex-grow flex-col py-24">
      <div>
        {messages.map((message) => (
          <ChatBubble message={message} key={message.id} />
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <Input
          className="fixed bottom-0 mb-8 w-full max-w-md rounded border border-gray-300 p-2 shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
