import Image from "next/image";
import React from "react";
import { CallIcon } from "./Icons";
import Link from "next/link";

const ChatMember = ({chatPerson}) => {
  return (
    <div className="w-full py-4.5 px-6 ">
      <div className=" flex justify-between items-center ">
        <div className="flex gap-4">
          <Image
            className="rounded-[10px] h-10 w-10"
            src={chatPerson?.image || "/images/Florencio.png"}
            alt="Chat Member"
            width={40}
            height={40}
          />
          <div>
            <h2 className="text-black font-inter font-semibold text-[20px] leading-[150%]">
              {chatPerson?.title || " hello"}
            </h2>
            <div className="flex items-center gap-1">
              <div className="bg-[#68D391] h-2.5 w-2.5 rounded-full"></div>
              <p className="text-[rgba(0,0,0,0.4)] font-inter font-semibold text-[12px] leading-[150%]">
                Online
              </p>
            </div>
          </div>
        </div>
        <Link href="tel:7404461344">
          <button className="bg-[rgba(97,94,240,0.1)] cursor-pointer h-11 w-23.5 rounded-lg font-inter font-semibold text-[14px] leading-[150%] text-[#615EF0]  flex justify-center items-center gap-2">
            <CallIcon /> Call
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ChatMember;
