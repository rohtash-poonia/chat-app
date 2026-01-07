import React from "react";
import {
  DownloadIcon,
  FilesNotifyIcon,
  MembersIcon,
  Menubtn,
  PdfIcon,
} from "./Icons";
import Image from "next/image";
import { DocumentsData, MembersData } from "./Helper";

const TeamMembers = () => {
  return (
    <div className="max-w-90.5 w-full h-screen  shadow-[1px_0px_0px_0px_rgba(0,0,0,0.08)] ">
      <div className="flex justify-between border-b-2 border-[#F3F3F3] p-7">
        <h2 className="text-[20px] font-inter font-semibold leading-[150%]">
          Directory
        </h2>
        <div className="cursor-pointer">
          <Menubtn />
        </div>
      </div>
      <div className="h-[calc(100vh-98px)] overflow-y-auto">
        <div className="py-6">
          <div className="flex gap-2 items-center w-full px-4">
            <h3 className="font-inter text-[14px] font-semibold leading-[150%]">
              Team Members
            </h3>
            <span>
              <MembersIcon />
            </span>
          </div>

          <div className="max-w-82.5 w-full p-3 px-4 border-b-2 border-[#F3F3F3] ">
            <div className="flex flex-col gap-2">
              {MembersData.map((member, index) => (
                <div
                  key={index}
                  className="flex gap-4 border border-transparent  hover:bg-[rgba(97,94,240,0.06)]  hover:border-black hover:rounded-xl hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-2"
                >
                  <Image
                    src={member.image}
                    alt="Team Members"
                    height={48}
                    width={48}
                  />
                  <div className="flex flex-col">
                    <h3 className="text-black font-inter font-semibold text-[14px] leading-[150%]">
                      {member.name}
                    </h3>
                    <p className="text-[rgba(0,0,0,0.4)] font-inter font-semibold text-[12px] leading-[150%]">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="flex gap-2 items-center px-4">
            <h3 className="font-inter text-[14px] font-semibold leading-[150%]">
              Files
            </h3>
            <p className="text-[12px] flex justify-center items-center font-semibold font-inter bg-[#EDF2F7] rounded-lg px-2 py-0.5 ">
              {DocumentsData.length}
            </p>
          </div>
        </div>
        <div className="py-2">
          <div className="flex flex-col gap-2 items-center">
            {DocumentsData.map((doc, index) => {
              const type = (doc.DocType || "").toLowerCase();
              const bgClass = type.includes("pdf")
                ? "bg-[#FFF5F5]"
                : type.includes("png")
                ? "bg-[#F0FFF4]"
                : type.includes("doc")
                ? "bg-[#EBF8FF]"
                : type.includes("xxl")
                ? "bg-[#FAF5FF]"
                : "bg-gray-100";
              return (
                <div
                  key={index}
                  className="max-w-82.5 w-full p-3 flex justify-between items-center border border-transparent  hover:bg-[rgba(97,94,240,0.06)]  hover:border-black hover:rounded-xl hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                >
                  <div className="flex gap-4">
                    <div
                      className={`h-12 w-12 flex justify-center items-center ${bgClass} rounded-xl`}
                    >
                      <span>{doc.icon}</span>
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-[inter] font-semibold text-[14px] leading-[150%]">
                        {doc.DocName}
                      </h4>
                      <div className="text-[12px] font-[inter] font-semibold leading-[150%] text-[rgba(0,0,0,0.4)] flex gap-2.5">
                        <p>{doc.DocType}</p>
                        <p>{doc.DocSize}</p>
                      </div>
                    </div>
                  </div>
                  <p className="cursor-pointer">
                    <DownloadIcon />
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
