import { cn } from "~/lib/utils";
type ChatMessageProps = {
  message: ChatMessage;
};
type ChatMessage = {
  id: string;
  role: string;
  content: string;
};

export const ChatBubble: React.FC<
  ChatMessageProps & { className?: string }
> = ({ message, className = "" }) => {
  return (
    <div
      className={cn(
        "m-4 flex",
        message.role == "user" ? "justify-end" : "",
        className,
      )}
    >
      <div
        className={cn(
          "w-fit whitespace-pre-wrap p-2",
          message.role == "user" ? "rounded-lg bg-muted text-right" : "",
        )}
      >
        <b>{message.role === "user" ? "User: " : "AI: "}</b>
        {message.content}
      </div>
    </div>
  );
};
