import { BrowserRouter } from "react-router";
import "./App.css";
import { ChatContext } from "./Components/context/ChatContext";
import ChatDashboard from "./Components/Dashboard/ChatDashboard";

function App() {
  return (
    <ChatContext>
      <BrowserRouter>
        <div className="min-h-screen">
          <ChatDashboard />
        </div>
      </BrowserRouter>
    </ChatContext>
  );
}

export default App;
