import { useEffect, useRef } from "react";
import UsePost from "../context/UsePostContext";
import MessageBot from "./MessageBot";

function Messages() {
  const { firstTimeTyping, messages } = UsePost();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // اسکرول خودکار به آخرین پیام
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col space-y-4 overflow-hidden h-full">
      <div className="flex flex-col space-y-4 overflow-y-auto max-h-[70vh] px-4">
        {messages
          .filter((msg) => msg.text.trim() !== "")
          .map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "bot" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`relative p-3 rounded-lg max-w-xl flex h-full items-center ${
                  msg.sender === "bot" ? "text-white" : "bg-gray-300 text-black"
                }`}
              >
                {msg.sender === "bot" ? (
                  <span className="absolute overflow-y-auto -top-5 left-4 bg-gray-700 p-3 text-gray-300 text-sm px-2 py-1 rounded-md shadow-md">
                    {msg.text}
                  </span>
                ) : (
                  <span>{msg.text}</span>
                )}

                {/* پیام‌های bot داخل کامپوننت MessageBot */}
                {msg.sender === "bot" && (
                  <MessageBot
                    id={msg.id}
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin..."
                    sender="bot"
                    name="Scan Report"
                    avatar=""
                  />
                )}
              </div>
            </div>
          ))}

        {/* المان نامرئی برای اسکرول به آخرین پیام */}
        <div ref={messagesEndRef} />
      </div>

      {/* پیام اولیه قبل از تایپ */}
      {firstTimeTyping && (
        <div className="text-white flex justify-center flex-col items-center md:my-32 my-22">
          <h1 className="md:text-2xl text-sm">Hi, I'm VulnAI.</h1>
          <p className="md:text-sm text-sm">AI Vulnerability Scanner</p>
        </div>
      )}
    </div>
  );
}

export default Messages;
