import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src="https://icons.iconarchive.com/icons/icons8/android/512/Photo-Video-Video-Call-icon.png" alt="" />
          <img src="https://cdn-icons-png.flaticon.com/512/2934/2934394.png" alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
