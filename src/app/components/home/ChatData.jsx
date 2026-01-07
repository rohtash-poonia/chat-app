"use client";
import React, { useState } from "react";
import MessageList from "./MessageList";
import ChatMember from "../common/ChatMember";
import InputMessage from "../common/InputMessage";

const ChatData = () => {
  const [chatPerson, setChatPerson] = useState(null);
  return (
    <div className="flex w-full">
      <MessageList setChatPerson={setChatPerson} />
      <div className="flex flex-col justify-between h-screen w-full  shadow-[1px_0px_0px_0px_rgba(0,0,0,0.08)]">
        <ChatMember chatPerson={chatPerson} />
        <InputMessage chatPerson={chatPerson} />
      </div>
    </div>
  );
};

export default ChatData;
