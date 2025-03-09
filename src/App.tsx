import { BrowserRouter } from "react-router";
import { ChatProvider } from "./Components/context/ChatProvider";
import ChatDashboard from "./Components/ChatDashboard/ChatLayout ";

function App() {
  return (
    <ChatProvider>
      <BrowserRouter>
        <div className="min-h-screen">
          <ChatDashboard />
        </div>
      </BrowserRouter>
    </ChatProvider>
  );
}

export default App;
