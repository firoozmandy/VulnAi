import UsePost from "../context/UsePostContext";


function Messages() {
  const { firstTimeTyping, messages } = UsePost();
  return (
    <div className="flex flex-col space-y-4 overflow-y-auto mb-4">
      {messages
        .filter((msg) => msg.text.trim() !== "")
        .map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "bot" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`p-3 rounded-lg max-w-xs ${
                msg.sender === "bot"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      {firstTimeTyping ? (
        <div className="text-white flex justify-center flex-col items-center md:my-32 my-22">
          <h1 className="md:text-2xl text-sm">Hi‚I'm VulnAI.</h1>
          <p className="md:text-sm text-sm">Ai Vulnerability Scanner</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Messages;
