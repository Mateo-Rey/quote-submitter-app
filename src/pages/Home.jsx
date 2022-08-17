import { useState, useEffect } from "react";

import "../App.css";
import AddMessage from "../components/AddMessage";
import MessageList from "../components/MessageList";

export default function Home({ isLoggedIn }) {
  const [message, setMessage] = useState("");

  console.log("Home loaded");

  useEffect(() => {
    const handleFetch = () => {
      fetch("https://chat-app-98837.web.app/messages")
        .then((res) => res.json())
        .then((data) => setMessage(data));
    };

     handleFetch()
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <AddMessage />
      ) : (
        <div className="login-message"><h2>Login to add a message!</h2><p>Remember each message you post is public and must stay confidential. For example no names, addresses, phone numbers, or any information that can indentify someone.</p><div className="warning"></div></div>
      )}

      <MessageList message={message} />
    </>
  );
}
