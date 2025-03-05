// import { useState } from "react";
// import { FaRegCopy } from "react-icons/fa";
import UsePost from "../context/UsePostContext";
import MessageBot from "./MessageBot";

function Messages() {
  const { firstTimeTyping, messages } = UsePost();
  // const [copiedMessageId, setCopiedMessageId] = useState<number | null>(null);

  // تابع کپی کردن متن
  // const copyToClipboard = (text: string, id: number) => {
  //   navigator.clipboard.writeText(text).then(() => {
  //     setCopiedMessageId(id);
  //     setTimeout(() => setCopiedMessageId(null), 2000); // پیام تأیید بعد از ۲ ثانیه محو می‌شود.
  //   });
  // };

  return (
    <div className="flex flex-col space-y-4 overflow-y-auto mb-4">
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
              className={`relative p-3 rounded-lg max-w-xl flex items-center ${
                msg.sender === "bot" ? "text-white" : "bg-gray-300 text-black"
              }`}
            >
              {/* <div className="flex flex-col leading-1.5 p-4 border border-gray-200 bg-gray-100 rounded-lg dark:bg-gray-700 max-w-[90%] md:max-w-[70%] lg:max-w-[60%]"> */}
              {msg.sender === "bot" ? (
                <span className="absolute -top-5 left-4 bg-gray-700 p-3 text-gray-300 text-sm px-2 py-1 rounded-md shadow-md">
                  {msg.text}
                </span>
              ) : (
                <span>{msg.text}</span>
              )}
              {/* </div> */}
              {/* آیکون کپی فقط برای پیام‌های bot نمایش داده شود */}
              {msg.sender === "bot" && (
                <div>
                  {/* <button
                    onClick={() => copyToClipboard(msg.text, msg.id)}
                    className="ml-2 text-white opacity-70 hover:opacity-100 transition"
                    title="کپی کردن"
                    >
                    <FaRegCopy />
                    </button> */}

                  <MessageBot
                    id={1}
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    sender="bot"
                    // time="12:30 PM"
                    name="Scan Report"
                    avatar=""
                  />
                </div>
              )}
            </div>
          </div>
        ))}

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
