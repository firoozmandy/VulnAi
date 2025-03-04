import { useContext } from "react";
import { ContextProvider } from "./ChatContext";

function UsePost() {
  const context = useContext(ContextProvider);
  if (!context) throw new Error("Checked the context, it's not available!");
  return context;
}

export default UsePost;
