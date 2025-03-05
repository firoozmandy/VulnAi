import { Button } from "@headlessui/react";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaLongArrowAltUp } from "react-icons/fa";
import { ImLink } from "react-icons/im";
import { MdQrCodeScanner } from "react-icons/md";

import { useRef } from "react";

import UsePost from "../context/UsePostContext";

function ChatInput() {
  const {
    input,
    setInput,
    firstTimeTyping,
    setFirstTimeTyping,
    messages,
    setMessages,
  } = UsePost();

  const hasTyped = useRef(false);
  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: input,
        sender: "user",
      };
      setMessages([...messages, newMessage]);
      setInput("");

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: prevMessages.length + 1, text: "Scanned for 27 seconds ", sender: "bot" },
        ]);
      }, 1000);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    if (!hasTyped.current) {
      setFirstTimeTyping(false);
      hasTyped.current = true;
    }
  };

  return (
    <div
      className={`flex bg-neutral-600 flex-col rounded-lg px-4 py-2 mx-auto ${
        firstTimeTyping
          ? "sm:min-w-2/5 w-72 top-72 right-2 sm:right-64 absolute sm:top-72 "
          : "w-full"
      }`}
    >
      <input
        type="text"
        className={`w-full p-3 focus:outline-none `}
        placeholder="HostName or IP address"
        value={input}
        onChange={handleInputChange}
        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
      />
      <div className="flex justify-between items-center w-full mt-2">
        <div className="flex items-center gap-3 text-white">
          <div className="flex items-center border rounded-full md:text-xs text-[9px] px-2">
            <MdQrCodeScanner />
            LightScan
          </div>
          <div className="flex items-center border rounded-full md:text-xs text-[9px] px-2">
            <AiOutlineGlobal />
            DeepScan
          </div>
          <div className="md:flex hidden items-center border rounded-full md:text-xs text-[9px] px-2">
            <AiOutlineGlobal />
            PortScan
          </div>
          <div className="md:flex hidden items-center border rounded-full md:text-xs text-[9px] px-2">
            <AiOutlineGlobal />
            DNS Check
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button>
            <ImLink className="text-white" />
          </Button>
          <button
            onClick={handleSendMessage}
            className="bg-gray-400 text-white p-2 rounded-full"
          >
            <FaLongArrowAltUp />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatInput;
