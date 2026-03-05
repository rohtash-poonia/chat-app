"use client";
import Sidebar from "./components/home/Sidebar";
import TeamMembers from "./components/common/TeamMembers";
import ChatData from "./components/home/ChatData";

import MainLayout from "./components/home/MainLayout";

import Practice from "./components/home/PracticeGrid";
import Table from "./components/home/Table";
import { useEffect, useState } from "react";
import { users } from "./components/common/Helper";

export default function Home() {
  const [showMembersOnSmall, setShowMembersOnSmall] = useState(false);

  // move chatPerson state here so sidebar and ChatData can coordinate
  const [chatPerson, setChatPerson] = useState(null);

  const handleHomeClick = () => {
    setShowMembersOnSmall(!showMembersOnSmall);
  };

  const handleMessageClick = () => {
    // collapse an open chat on small screens
    setChatPerson(null);
  };
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setChatPerson(null);
    }
  };
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
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
           className={`hidden xl:block ${showMembersOnSmall ? "block xl:block" : ""}`}>
            <TeamMembers />
          </div>
        </div>
      </div>
    </>
  );
}
