"use client";
import React, { useState } from "react";
import Link from "next/link";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import {
  faBars,
  faHome,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NavBar.module.css";

function NavBar() {
  // const toggle = true;
  const [toggle, setToggle] = useState<boolean>(false);
  const navLinks = [
    {
      title: "About",
      path: "/pages/about",
      awesomeIcon: faCircleQuestion,
    },
    {
      title: "Home",
      path: "/",
      awesomeIcon: faHome,
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
      <div
        className={`${styles.navButton} bg-subtle text-accent border-accent`}
      >
        <button
          onClick={setNavbarstatus}
          className={`${styles.navButtonContols}`}
        >
          <FontAwesomeIcon icon={faBars} size="lg" className={`opacity-100`} />
        </button>
      </div>
    );
  }

  if (toggle) {
    return (
      <div
        className={`${styles.navMenu} bg-primary text-accent border border-accent`}
      >
        <div className={`${styles.navMenuControls}`}>
          <ul className={`${styles.navMenuLinks}`}>
          <li className={`${styles.navMenuLink}`}>
              <ThemeSwitcher />
            </li>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path} className={`${styles.navMenuLink}`}>
                  <FontAwesomeIcon
                    icon={link.awesomeIcon}
                    size="lg"
                    fixedWidth={true}
                    className={`${styles.navMenuIcon}`}
                  />
                </Link>
              </li>
            ))}
            <li className={`${styles.navMenuLink}`}>
              <FontAwesomeIcon
                icon={faBars}
                size="lg"
                fixedWidth={true}
                className={`${styles.navMenuIcon}`}
                onClick={setNavbarstatus}
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
