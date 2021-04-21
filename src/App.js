import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      console.log(response);
      setMessages(response.data);
    });
  }, []);
  useEffect(() => {
    const pusher = new Pusher("85ccc104eb6aad2077b3", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessages) => {
      setMessages([...messages, newMessages]);
    });
    return () => {
      channel.unsubscribe();
      channel.unbind_all();
    };
  }, [messages]);
  console.log(messages);
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
