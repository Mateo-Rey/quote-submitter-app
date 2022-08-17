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
        <h2 className="pre-message">Please login to add a message and make sure all posts do not contain any confidential information</h2>
      )}

      <MessageList message={message} />
    </>
  );
}
