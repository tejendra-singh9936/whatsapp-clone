import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "../css/sidebarchat.css";

function SidebarChat() {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat_info">
        <h2>Room name</h2>
        <p>this is last message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
