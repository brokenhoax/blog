"use client";
import React, { useState } from "react";
import Toggle from "../toggle/Toggle";
import Link from "next/link";
import styles from "./NavBar.module.css";

interface SetNavvy {
  name: string;
}

function NavBar() {
  const [toggle, setToggle] = useState<string>("");

  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    // {
    //   title: "Login",
    //   path: "/login",
    // },
    // {
    //   title: "Blog",
    //   path: "/blog",
    // },
  ];

  function setNavbarstatus(path) {
    if (toggle) {
      setToggle("false");
    } else {
      setToggle("true");
    }
  }

  if (!toggle) {
    return (
      <div className={styles.navbar}>
        <div className="mb-8 fixed top-0 flex justify-between items-center bg-gray-900 h-16 rounded-b-3xl px-8 py-4 md:w-700 -mt-1 border border-red-400">
          {/* Left */}
          <div className="flex items-center">
            {toggle === "true" && (
              <ul className="flex font-semibold space-x-4">
                <button onClick={setNavbarstatus}>👋 </button>
                {navLinks.map((link, index) => (
                  <li
                    className="flex items-center justify-between my-auto"
                    key={index}
                  >
                    <Link
                      href={link.path}
                      className="bg-gray-900 hover:bg-gray-800 rounded-lg text-gray-200 px-3 py-2 font-semibold focus:bg-gray-800"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Right */}
          <div className="pl-8">
            <Toggle />
          </div>
        </div>
      </div>
    );
  }

  if (toggle) {
    return (
      <div className={styles.navbar}>
        <div className="fixed top-0 flex justify-between items-center bg-gray-900 h-16 rounded-b-3xl px-8 py-4 md:w-700 -mt-1 border border-red-400">
          {/* Left */}
          <button onClick={setNavbarstatus} className="w-8 h-8 text-center">
            👋{" "}
          </button>
          {/* Right */}
          <div className="flex justify-end items-center">
            <div className="pl-8">
              <Toggle />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
