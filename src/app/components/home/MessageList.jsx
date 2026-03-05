"use client";
import React, { useEffect, useState } from "react";
import { AddNewChat, DropdownIcon, MessageNotify } from "../common/Icons";
import Image from "next/image";
import { users } from "../common/Helper";

const MessageList = ({ setChatPerson, selected }) => {
  const [search, setSearch] = useState("");
  const [allUser, setAllUser] = useState(users);

  useEffect(() => {
    const q = search?.trim().toLowerCase();
    if (!q) {
      setAllUser(users);
      return;
    }
    const filtered = users.filter((item) =>
      item.title?.toString().toLowerCase().includes(q),
    );
    setAllUser(filtered);
  }, [search]);
  return (
    <div className="max-w-87.25 max-md:max-w-175 w-full flex h-screen flex-col items-center shadow-[1px_0px_0px_0px_rgba(0,0,0,0.08)] ">
      <div className=" w-full  border-b-2 max-md:p-3 max-sm:p-2 border-[#F3F3F3] flex justify-between items-center py-7 px-6">
        <div className="flex justify-center items-center gap-2.5">
          <div className="flex justify-center gap-1.5 items-center">
            <h2 className="text-[20px] max-sm:text-base font-inter font-semibold leading-[150%]">
              Messages
            </h2>
          </div>
          <p className="text-[12px] flex justify-center items-center font-semibold font-inter bg-[#EDF2F7] rounded-lg px-2 py-0.5 ">
            {allUser.length}
          </p>
        </div>
        <div className="cursor-pointer">
          <div className="sm:hidden">
            <Image
              src="/images/chatapp-logo.png"
              alt="logo"
              width={56}
              height={56}
            />
          </div>
          <div className="max-sm:hidden">
            <AddNewChat />
          </div>
        </div>
      </div>

      {/* for search */}
      <div className=" w-full px-6 py-3 flex justify-center items-center">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="search  Search messages"
          className="max-w-173  h-12 outline-none rounded-xl px-5 w-full bg-[#F3F3F3]"
        />
      </div>
      {/* all chat members */}
      <div className="max-md:max-w-175 w-full">
        <div className="flex flex-col min-w-87.5 w-full gap-2 max-h-[calc(100vh-170px)] overflow-y-auto">
          {allUser?.map((object, outerIndex) => (
            <div
              onClick={() => setChatPerson(object)}
              key={outerIndex}
              className={`w-full p-3 border border-transparent hover:bg-[rgba(97,94,240,0.06)] hover:border-black hover:rounded-xl hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ${
                selected?.title === object.title
                  ? "bg-[rgba(97,94,240,0.1)]"
                  : ""
              }`}
            >
              <div className="flex gap-4">
                <Image
                  className="rounded-xl h-12 w-12"
                  src={object.image}
                  alt="chat-member-1"
                  height="48"
                  width="48"
                />

                <div className="min-w-57.25 w-full  flex justify-between">
                  <div>
                    <h3 className="text-[14px] font-semibold leading-[150%] font-inter">
                      {object.title}
                    </h3>
                    <div className="flex w-full">
                      <p className="text-[rgba(0,0,0,0.4)] ">
                        {object.subtitle}{" "}
                        <span className="text-black">{object.emoji}</span>
                      </p>
                    </div>

                    <div className="w-full flex gap-2 pt-2">
                      {(object.button || []).map((tag, innerIndex) => (
                        <button
                          key={`${tag}-${innerIndex}`}
                          type="button"
                          className={`${
                            tag === "Question" || tag === "Bug"
                              ? "bg-[#FEEBC8] hover:bg-orange-300 hover:text-orange-600 text-[#DD6B20]"
                              : tag === "Some content" || tag === "Follow up"
                                ? "border border-[#CBD5E0] text-[#718096] hover:bg-white hover:text-black hover:border-black"
                                : "bg-[#C6F6D5] text-[#38A169] hover:bg-green-400 hover:text-green-700"
                          } px-2 py-0.5 rounded-xl text-[12px] leading-[150%] font-inter cursor-pointer font-semibold`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                  <p className="text-[rgba(0,0,0,0.4)] max-sm:pr-6">{object.active}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessageList;
