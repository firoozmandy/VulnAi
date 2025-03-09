import { createContext, useContext, useState, ReactNode } from "react";

type MessageType = {
  id: number;
  text: string;
  sender: string;
};

type ContextType = {
  messages: MessageType[];
  setMessages: React.Dispatch<React.SetStateAction<MessageType[]>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  firstTimeTyping: boolean;
  setFirstTimeTyping: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

// 👇 تغییر نام کانتکست به `ChatContext`
const ChatContext = createContext<ContextType | undefined>(undefined);

function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [input, setInput] = useState<string>("");
  const [firstTimeTyping, setFirstTimeTyping] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(true);

  return (
    <ChatContext.Provider
      value={{
        messages,
        setMessages,
        input,
        setInput,
        firstTimeTyping,
        setFirstTimeTyping,
        open,
        setOpen,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

function useChat() {
  const context = useContext(ChatContext);
  if (!context) throw new Error("ChatContext is not available!");
  return context;
}

export { ChatProvider, useChat };
