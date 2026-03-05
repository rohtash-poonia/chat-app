import Image from "next/image";
import React from "react";
import {
  CommunityIcon,
  HomeIcon,
  MessageIcon,
  SearchIcon,
  SettingsIcon,
  StatusIcon,
} from "../common/Icons";

const Sidebar = () => {
  return (
    <div>
      <div
        className="w-22 h-screen bg-white p-4 shadow-[0_0_24px_0_#00000014]
         max-sm:w-full max-sm:h-16 max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:z-50"
      >
        <div
          className="flex flex-col h-full items-center justify-between
           max-sm:flex-row max-sm:justify-around"
        >
          <div
            className="flex flex-col gap-10 items-center
             max-sm:flex-row max-sm:gap-6"
          >
            <div className="max-sm:hidden">
              <Image
                src="/images/chatapp-logo.png"
                alt="logo"
                width={56}
                height={56}
              />
            </div>
            <div className="flex sm:flex-col gap-8 justify-center items-center">
              <div className="cursor-pointer ">
                <HomeIcon />
              </div>
              <div className="cursor-pointer">
                <MessageIcon />
              </div>
              <div className="cursor-pointer">
                <StatusIcon />
              </div>
              <div className="cursor-pointer">
                <SearchIcon />
              </div>
              <div className="cursor-pointer ">
                <CommunityIcon />
              </div>
            </div>
          </div>
          <div className="cursor-pointer hover:rotate-360 duration-300">
            <SettingsIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
