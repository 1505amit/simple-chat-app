import { useEffect, useState, useRef } from "react";
import "./App.css";
import io, { Socket } from "socket.io-client";

function App() {
  const socketRef = useRef<Socket | null>(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    // Create socket instance only once
    const socket = io("http://localhost:3000", {
      transports: ["websocket", "polling"],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5,
    });

    socketRef.current = socket;

    console.log("Setting up socket listeners...");
    socket.on("message", (data: any) => {
      setMessages((prevMessages) => [...prevMessages, data.message]);
    });

    socket.on("connect", () => {
      console.log("Socket connected");
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    console.log("Socket listeners set up successfully.");

    return () => {
      socket.off("message");
      socket.off("connect");
      socket.off("disconnect");
      socket.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    console.log("Sending message:", message);
    if (message.trim() !== "" && socketRef.current) {
      socketRef.current.emit("sendMessage", { message });
      setMessage("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <div className="chat-container">
        <div className="chat-window">
          <ul
            style={{
              marginTop: 20,
              listStyle: "none",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {messages.map((m, i) => (
              <li
                key={i}
                style={{
                  backgroundColor: "#f0f0f0",
                  color: "#333",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  maxWidth: "100%",
                  wordWrap: "break-word",
                  fontSize: "14px",
                  lineHeight: "1.5",
                  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                }}
              >
                {m}
              </li>
            ))}
          </ul>
        </div>
        <div className="input-container">
          <input
            className="message-input"
            type="text"
            onChange={handleInputChange}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type your message..."
            value={message}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </>
  );
}

export default App;
