
import Sidebar from "./components/home/Sidebar";
import TeamMembers from "./components/common/TeamMembers";
import ChatData from "./components/home/ChatData";

import MainLayout from "./components/home/MainLayout";

import Practice from "./components/home/PracticeGrid";
import Table from "./components/home/Table";

export default function Home() {

  return (
    <>
      {/* <MainLayout />  */}

      <div className="flex max-sm:flex-col h-screen">
        {/* Sidebar */}
        <div className="max-sm:order-2">
          <Sidebar /> 
        </div>

        <div className="flex w-full max-sm:flex-col">
          {/* Chat */}
          <ChatData />

          {/* Team Members */}
          <div className="max-xl:hidden">
            <TeamMembers />
          </div>
        </div>
      </div>
    </>
  );
}
