"use client";
import React, { useState } from "react";
import MessageList from "./MessageList";
import ChatMember from "../common/ChatMember";
import InputMessage from "../common/InputMessage";

const ChatData = () => {
  const [chatPerson, setChatPerson] = useState(null);

  return (
    <div className="flex w-full h-screen">
      {/* MESSAGE LIST */}
      <div
        className={`w-full md:w-87.5 ${
          chatPerson ? "hidden md:block" : "block"
        }`}
      >
        <MessageList setChatPerson={setChatPerson} />
      </div>

      {/* CHAT SECTION */}
      {chatPerson && (
        <div className="flex flex-col w-full h-screen">
          {/* CHAT HEADER */}
          <ChatMember chatPerson={chatPerson} setchatPerson={setChatPerson} />

          {/* CHAT BODY */}
          <div className="flex-1">
            <InputMessage
              chatPerson={chatPerson}
              setchatPerson={setChatPerson}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatData;
