import { useState } from "react";

interface MessageProps {
  id: number;
  text: string;
  sender: "bot" | "user";
//   time: string;
  name: string;
  avatar: string;
}

const MessageBot: React.FC<MessageProps> = ({
  text,
  sender,
//   time,
  name,
  avatar,
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex items-start gap-2.5">
      <div>{avatar}</div>
      <div className="flex flex-col gap-0 w-full max-w-[820px]">
        <span className="text-base font-semibold text-gray-300 py-4 dark:text-white">
          {name}
        </span>

        {/* دایو اصلی پیام با بک‌گراند برای "کپی متن" */}
          {copied && (
            <span className="text-xs text-white mt-1 self-end">
              ✅ copied
            </span>
          )}
        <div className="flex flex-col leading-1.5 border-gray-200 bg-gray-100 rounded-lg dark:bg-gray-700 relative">
          {sender === "bot" && (
            <button
              onClick={copyToClipboard}
              className="bg-gray-600 p-2 text-white text-xs rounded-t-lg text-left w-full hover:bg-gray-700 transition"
              title="کپی متن"
            >
              Copy
            </button>
          )}

          <p className="font-normal p-7 bg-black text-white text-xl">
            {text}
          </p>

        </div>

        <span className="text-normal font-normal text-gray-300 py-4">
          Ai Summary:
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </span>
      </div>
    </div>
  );
};

export default MessageBot;
