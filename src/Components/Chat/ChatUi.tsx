import ChatInput from "./ChatInput";
import Messages from "./Messages";
const ChatUI = () => {
  return (
    <div className="flex flex-col justify-between h-full p-4">
      <Messages/>
      <ChatInput />
    </div>
  );
};

export default ChatUI;
