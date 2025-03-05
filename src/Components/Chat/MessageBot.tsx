import { useState } from "react";

interface MessageProps {
  id: number;
  text: string;
  sender: "bot" | "user";
  name: string;
  avatar: string;
}

const MessageBot: React.FC<MessageProps> = ({
  text,
  sender,
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
    <div className="flex items-start gap-2.5 w-full">
      <div>{avatar}</div>
      <div className="flex flex-col gap-2 w-full max-w-[90%]">
        <span className="text-base font-semibold text-gray-300 py-2 dark:text-white">
          {name}
        </span>

        <div className="flex flex-col leading-1.5 border border-gray-200 bg-gray-800 rounded-lg dark:bg-gray-700 relative w-full">
          {sender === "bot" && (
            <button
              onClick={copyToClipboard}
              className="bg-gray-700 px-4 py-2 text-white text-xs rounded-t-lg text-left w-full hover:bg-gray-600 transition"
              title="کپی متن"
            >
              Copy Text
            </button>
          )}

          <p className="font-normal p-4 bg-black text-white text-lg">
            {text}
          </p>
        </div>

        {copied && (
          <span className="text-xs text-green-400 self-end">✅ Copied</span>
        )}

        <div className="text-normal font-normal text-gray-300 py-2 max-w-[90%]">
          <strong>AI Summary:</strong> Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </div>
      </div>
    </div>
  );
};

export default MessageBot;
