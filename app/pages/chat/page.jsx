"use client";

import { useState, useRef, useEffect } from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import { sendPrompt } from "../../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import styles from "./Chat.module.css";

function Chat() {
  const messagesRef = useRef(null);
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentStream, setCurrentStream] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, currentStream]);

  async function handleSubmit() {
    if (!prompt.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: prompt }]);
    setPrompt("");

    setCurrentStream("");
    setIsStreaming(true);

    const response = await sendPrompt(prompt);
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
          <section className="h-full section motion-preset-focus">
            <h2>Department of Motor Vehicles</h2>
            <div className="divider border-b border-accent"></div>
            <div
              className="overflow-y-auto flex-1 mt-4 p-4 border rounded bg-white/10"
              ref={messagesRef}
            >
              {messages.length === 0 && (
                <p className="text-white italic text-accent">
                  Ask me anything about the DMV data!
                </p>
              )}
              <div className="messages">
                {messages.map((m, i) => (
                  <p
                    key={i}
                    className={
                      m.role === "user"
                        ? `italic text-accent mt-2`
                        : "assistantMsg"
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
            </div>
            {/* Controlled textarea */}
            <div className="absolute inset-x-0 bottom-0">
              <textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="resize-none w-full pt-4 pb-8 px-4 min-h-[130px] rounded border-accent bg-subtle focus:outline-none"
                placeholder="Type your message here..."
              />
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
