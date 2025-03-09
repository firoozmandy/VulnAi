import ChatScanInput  from "./ChatScanInput ";
import Messages from "./Messages";
const ChatUI = () => {
  return (
    <div className="flex flex-col justify-between h-screen p-4">
      <Messages/>
      <ChatScanInput  />
    </div>
  );
};

export default ChatUI;
