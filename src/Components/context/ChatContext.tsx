import { createContext, JSX, useState } from "react";

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

const ContextProvider = createContext<ContextType | undefined>(undefined);

function ChatContext({ children }: { children: JSX.Element }) {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [input, setInput] = useState<string>("");
  const [firstTimeTyping, setFirstTimeTyping] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(true);

  return (
    <ContextProvider.Provider
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
    </ContextProvider.Provider>
  );
}


export { ChatContext, ContextProvider };
