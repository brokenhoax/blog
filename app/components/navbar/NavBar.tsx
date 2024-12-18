"use client";
import React, { useState } from "react";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import Link from "next/link";
import styles from "./NavBar.module.css";

function NavBar() {
  // const toggle = true;
  const [toggle, setToggle] = useState<boolean>(false);
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/pages/about",
    },
    // {
    //   title: "Login",
    //   path: "/login",
    // }
  ];

  function setNavbarstatus() {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }

  if (!toggle) {
    return (
      <div className={`${styles.navbar} bg-primary text-accent`}>
        <div className={`${styles.navbarControls}`}>
          {/* Left */}
          <div className={`${styles.navbarControlsLeft}`}>
            <button
              onClick={setNavbarstatus}
              className={`${styles.navbarMinimalButton}`}
            ></button>
            <ul className={`${styles.navbarLinks}`}>
              {navLinks.map((link, index) => (
                <li className={`${styles.navbarLinkItem}`} key={index}>
                  <button>
                    <Link
                      className={`${styles.navbarLink} hover:border-b hover:border-b-accent`}
                      href={link.path}
                    >
                      {link.title}
                    </Link>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Right */}
          <ThemeSwitcher />
        </div>
      </div>
    );
  }

  if (toggle) {
    return (
      <div className={`${styles.navbar} bg-primary text-accent`}>
        <div className={`${styles.navbarControls}`}>
          {/* Left */}
          <div className={`${styles.navbarControlsLeft} flex items-center`}>
            <button
              onClick={setNavbarstatus}
              className={`${styles.navbarMinimalButton}`}
            ></button>
          </div>
          {/* Right */}
          <ThemeSwitcher />
        </div>
      </div>
    );
  }
}

export default NavBar;
