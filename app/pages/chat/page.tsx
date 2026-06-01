"use client";

import React, { useState, useRef, useEffect } from "react";
import NavBar from "../../components/navbar/NavBar";
import PageHeader from "../../components/pageHeader/PageHeader";
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
  const hasMessages = messages.length > 0;

  useEffect(() => {
    if (messagesRef.current) {
      (messagesRef.current as HTMLDivElement).scrollTop = (
        messagesRef.current as HTMLDivElement
      ).scrollHeight;
    }
  }, [messages, currentStream]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }

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
  if (!hasMessages) {
    chatResponse = <></>;
  } else {
    chatResponse = (
      <div
        className="flex-1 overflow-y-auto min-h-0 flex flex-col justify-start"
        ref={messagesRef}
      >
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

  let welcomeMessage: React.ReactElement;
  if (!hasMessages) {
    welcomeMessage = (
      <div className="font-medium text-lg text-center">
        How may I assist you today?
      </div>
    );
  } else {
    welcomeMessage = <></>;
  }

  let promptForm: React.ReactElement;
  promptForm = (
    <form
      className={`relative ${hasMessages ? "mt-auto" : "min-w-full max-w-2xl"}`}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <textarea
        id="prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={handleKeyDown}
        className="resize-none w-full mt-4 pt-4 pb-8 px-4 min-h-[130px] rounded border-accent bg-subtle text-secondary placeholder:text-secondary/70 focus:outline-none"
        placeholder="Type your message here..."
      ></textarea>
      <button
        type="submit"
        className={`${styles.submitButton} absolute right-2 bottom-4 text-accent bg-primary rounded-lg border-2 border-transparent transition-all duration-300 hover:border-accent hover:shadow-[0_0_8px_2px] hover:shadow-accent focus:outline-none focus:border-accent focus:shadow-[0_0_8px_2px] focus:shadow-accent`}
      >
        <FontAwesomeIcon
          icon={faPaperPlane}
          fixedWidth={true}
        ></FontAwesomeIcon>
      </button>
    </form>
  );

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
          <div className="h-full min-h-0 motion-preset-focus flex flex-col">
            <PageHeader
              title="Kraus Cloud Chatbot"
              subtitle="Department of Motor Vehicles"
            />
            <div className="flex-1 min-h-0 flex flex-col pt-2">
              {hasMessages ? (
                <>
                  {/* Response Area */}
                  {chatResponse}
                  {/* Prompt Area */}
                  {promptForm}
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center gap-4">
                  {/* Welcome Message */}
                  {welcomeMessage}
                  {/* Prompt Area */}
                  {promptForm}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="rightSidebar">
          <NavBar marginTop="mt-[11rem]" />
        </div>
        <div className={`footer`}>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default Chat;
