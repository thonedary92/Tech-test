import React, { useState } from "react";
import ChatBox from "../components/ChatBox";
import ChatBoxHeader from "../components/ChatBoxHeader";
import ChatMessage from "../components/ChatMessage";
import "../style/right.css";

function RightSide({ UserData, chatId }) {
  return (
    <div className={chatId ? "withRightChatID" : "woRightChatID"}>
      <ChatBoxHeader UserData={UserData} />
      <br />
      <ChatMessage UserData={UserData} />

      <ChatBox UserData={UserData} />
    </div>
  );
}

export default RightSide;
