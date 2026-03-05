"use client";
import Sidebar from "./components/home/Sidebar";
import TeamMembers from "./components/common/TeamMembers";
import ChatData from "./components/home/ChatData";

import MainLayout from "./components/home/MainLayout";

import Practice from "./components/home/PracticeGrid";
import Table from "./components/home/Table";
import { useState } from "react";
import { users } from "./components/common/Helper";

export default function Home() {
  const [showMembersOnSmall, setShowMembersOnSmall] = useState(false);

  // move chatPerson state here so sidebar and ChatData can coordinate
  const [chatPerson, setChatPerson] = useState(users[0] || null);

  const handleHomeClick = () => {
    setShowMembersOnSmall(!showMembersOnSmall);
  };

  const handleMessageClick = () => {
    // collapse an open chat on small screens
    setChatPerson(null);
  };

  return (
    <>
      {/* <MainLayout />  */}

      <div className="flex max-sm:flex-col h-screen">
        {/* Sidebar */}
        <div className="max-sm:order-2">
          <Sidebar
            onHomeClick={handleHomeClick}
            onMessageClick={handleMessageClick}
          />
        </div>

        <div className="flex w-full max-sm:flex-col">
          {/* Chat */}
          <ChatData chatPerson={chatPerson} setChatPerson={setChatPerson} />

          {/* Team Members */}
          <div
            className={`max-xl:block ${showMembersOnSmall ? "block" : "max-sm:hidden"}`}
          >
            <TeamMembers />
          </div>
        </div>
      </div>
    </>
  );
}
