"use client";
import React, { useEffect, useRef, useState } from "react";
import { SendIcon, UploadFileIcon } from "./Icons";
import Image from "next/image";

// chatPerson comes from parent; data is stored per person in localStorage
const InputMessage = ({ chatPerson }) => {
  const [form, setForm] = useState({
    details: "",
  });
  const [data, setData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = form.details.trim();
    if (text) {
      const newMsg = { text, sender: "me" };
      setData((prev) => [...prev, newMsg]);
      setForm({ details: "" });
      // simple automated reply for demonstration
      setTimeout(() => {
        setData((prev) => [
          ...prev,
          { text: "Thanks for your message!", sender: "them" },
        ]);
      }, 800);
    } else {
      alert("description is empty");
    }
  };

  const messageEndRef = useRef(null);
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [data]);

  // load history when chatPerson changes
  useEffect(() => {
    const key = `chatData_${chatPerson?.title || "default"}`;
    const stored = localStorage.getItem(key);
    if (stored) {
      setData(JSON.parse(stored));
    } else {
      setData([]);
    }
  }, [chatPerson]);

  // save whenever data updates
  useEffect(() => {
    const key = `chatData_${chatPerson?.title || "default"}`;
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, chatPerson]);

  return (
    <div>
      <div className="h-[calc(100vh-180px)] overflow-auto">
        {data.length > 0 ? (
          <div className="p-6">
            {data.map((item, idx) => (
              <div key={idx} className="mb-2">
                {item.sender === "me" ? (
                  <div className="flex justify-end items-start gap-2">
                    <p className="w-fit rounded-lg text-right p-2 bg-blue-100">
                      {item.text}
                    </p>
                    <Image
                      src={chatPerson?.image || "/images/Florencio.png"}
                      alt="me"
                      height={40}
                      width={40}
                      className="rounded-lg"
                    />
                  </div>
                ) : (
                  <div className="flex items-start gap-2">
                    <Image
                      src={chatPerson?.image || "/images/Florencio.png"}
                      alt="them"
                      width={40}
                      height={40}
                      className="rounded-lg"
                    />
                    <p className="p-2 bg-gray-100 rounded-lg">{item.text}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-sm text-gray-500">Start message</p>
        )}
        <div ref={messageEndRef}></div>
      </div>

      <form onSubmit={handleSubmit} className="w-full p-6">
        <div className="flex gap-6 relative items-center max-sm:pb-12!">
          <label htmlFor="file" className="cursor-pointer">
            <UploadFileIcon />
          </label>
          <input id="file" type="file" className="hidden" />
          <input
            type="text"
            value={form.details}
            onChange={(e) => {
              setForm({ ...form, details: e.target.value });
            }}
            placeholder="Type your message"
            className="w-full h-12 outline-none rounded-xl px-5 border-2 border-[#E2E8F0]"
          />
          <button
            type="submit"
            disabled={form.details.length === 0}
            className={`absolute top-3 right-5 ${
              form.details.length === 0
                ? " cursor-not-allowed contrast-0"
                : "cursor-pointer"
            }`}
          >
            <SendIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputMessage;
