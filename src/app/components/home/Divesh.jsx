"use client";
import React, { useState } from "react";
import { FileChosen, MessageSendIcon } from "../common/Icons";
import Image from "next/image";
const LayoutInput = () => {
  const date = new Date();
  const time = date.getHours();
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    details: "",
  });
  const formSubmit = (event) => {
    event.preventDefault();
    setData([...data, form]);
    setForm({
      details: "",
    });
  };
  return (
    <div className="border-[]">
      <div className="h-[calc(100vh-150px)] p-5 overflow-auto">
        {" "}
        {data && (
          <div>
            {data.map((items, index) => (
              <div key={index} className="mb-2">
                <div>
                  <Image src="/images/florenciopic.png" alt="pic" width={40} height={40} className="w-fit ml-auto rounded-lg"/>
                <p className="text-right bg-blue-100 p-2 rounded-lg w-fit ml-auto">
                  {items.details}{" "}
                  <sub>
                    {time} {date.getMinutes()}
                  </sub>
                </p>
                </div>
                 <div>
                  <Image src="/images/florenciopic.png" alt="pic" width={40} height={40} className="rounded-lg"/>
                  <p>client: hello{index}</p>
                  </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <form action="/" onSubmit={formSubmit}>
        <div className="font-[inter] flex gap-6 justify-center px-4 w-full">
          <label
            htmlFor="filechosen"
            className="cursor-pointer items-center flex"
          >
            <FileChosen />
          </label>
          <input type="file" id="filechosen" className="hidden" />
          <div
            type="input"
            className=" w-full rounded-xl border-2 border-[#E2E8F0] p-[10px_20px] flex justify-between"
          >
            <input
              value={form.details}
              onChange={(event) =>
                setForm({ ...form, details: event.target.value })
              }
              type="text"
              className="text-[14px] text-[#00000066] w-full outline-none"
              placeholder="Type a Message"
            />
            <button type="submit" className="cursor-pointer">
              <MessageSendIcon />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default LayoutInput;