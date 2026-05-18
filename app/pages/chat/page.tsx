"use client";

import React, { useState, useRef, useEffect } from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import { sendPrompt } from "../../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import styles from "./Chat.module.css";

function Chat() {
  const messagesRef = useRef(null);
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [],
  );
  const [currentStream, setCurrentStream] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);

  useEffect(() => {
    if (messagesRef.current) {
      (messagesRef.current as HTMLDivElement).scrollTop = (
        messagesRef.current as HTMLDivElement
      ).scrollHeight;
    }
  }, [messages, currentStream]);

  async function handleSubmit() {
    if (!prompt.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: prompt }]);
    setPrompt("");

    setCurrentStream("");
    setIsStreaming(true);

    const response = await sendPrompt(prompt);
    if (!response.body) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error: No response body received." },
      ]);
      setCurrentStream("");
      setIsStreaming(false);
      return;
    }
    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    let full = ""; // <-- LOCAL ACCUMULATOR

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      full += chunk; // <-- STORE IN LOCAL VARIABLE
      setCurrentStream(full); // <-- UI updates, but not the source of truth
    }

    // Finalize using the local variable, not state
    setMessages((prev) => [...prev, { role: "assistant", content: full }]);

    setCurrentStream("");
    setIsStreaming(false);
  }

  let chatResponse: React.ReactElement;
  if (messages.length === 0) {
    chatResponse = (
      <p className="flex-1 text-white italic text-accent">
        Ask me anything about the DMV data!
      </p>
    );
  } else {
    chatResponse = (
      <div className="messages flex-1 overflow-y-auto">
        {messages.map((m, i) => (
          <p
            key={i}
            className={
              m.role === "user" ? `italic text-accent mt-2` : "assistantMsg"
            }
          >
            {m.content}
          </p>
        ))}
        {isStreaming && (
          <p className="assistantMsg">
            {currentStream}
            <span className="cursor"></span>
          </p>
        )}
      </div>
    );
  }

  return (
    <div>
      {/* Video Component */}
      <div className="videoContainer">
        <video
          src={"/klouds.mp4"}
          className="backgroundVideo"
          autoPlay
          playsInline
          muted
          loop
        ></video>
      </div>
      <div className="gridContainer">
        <div className="leftSidebar"></div>
        <div className="main">
          <section className="h-screen section motion-preset-focus">
            <h2>Department of Motor Vehicles</h2>
            <div className="divider border-b border-accent"></div>
            <div className="flex flex-col justify-end min-h-full space-y-2 pb-5">
              {/* Response Area */}
              <div className="h-full mt-4 p-4 border rounded overflow-auto" ref={messagesRef}>
                {chatResponse}
              </div>
              {/* Prompt Area */}
              <div className="relative">
                <textarea
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="static resize-none w-full pt-4 pb-8 px-4 min-h-[130px] rounded border-accent bg-subtle focus:outline-none"
                  placeholder="Type your message here..."
                ></textarea>
                <button
                  className={`${styles.submitButton} absolute right-2 bottom-4 text-accent bg-primary rounded-lg border-2 border-transparent transition-all duration-300 hover:border-accent hover:shadow-[0_0_8px_2px] hover:shadow-accent focus:outline-none focus:border-accent focus:shadow-[0_0_8px_2px] focus:shadow-accent`}
                  onClick={handleSubmit}
                >
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    fixedWidth={true}
                  ></FontAwesomeIcon>
                </button>
              </div>
            </div>
          </section>
        </div>
        <div className="rightSidebar">
          <NavBar marginTop="mt-[5rem]" />
        </div>
        <div className={`footer`}>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default Chat;
