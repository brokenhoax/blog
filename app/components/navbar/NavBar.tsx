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
      <div className={`${styles.navAnchor}`}>
        <div className={`${styles.navWrapper}`}>
          <div className={`${styles.navButton} text-accent`}>
            <button
              onClick={setNavbarstatus}
              className={`${styles.navButtonContols}`}
            >
              <FontAwesomeIcon
                icon={faBars}
                size="lg"
                className={`${styles.navMenuIcon}`}
                fixedWidth={true}
              />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (toggle) {
    return (
      <div className={`${styles.navAnchor}`}>
        <div className={`${styles.navWrapper}`}>
          <div className={`${styles.navMenu} bg-primary text-accent`}>
            <div className={`${styles.navMenuControls}`}>
              <ul className={`${styles.navMenuLinks}`}>
                <li className={`${styles.navMenuLink}`}>
                  <ThemeSwitcher />
                </li>
                {navLinks.map((link, index) => (
                  <li key={index} className={`${styles.navMenuLink}`}>
                    <Link href={link.path}>
                      <FontAwesomeIcon
                        icon={link.awesomeIcon}
                        size="lg"
                        className={`${styles.navMenuIcon}`}
                      />
                    </Link>
                  </li>
                ))}
                <li className={`${styles.navMenuLink}`}>
                  <button
                    onClick={setNavbarstatus}
                    className={`${styles.navButtonContols}`}
                  >
                    <FontAwesomeIcon
                      icon={faBars}
                      size="lg"
                      className={`${styles.navMenuIcon}`}
                      onClick={setNavbarstatus}
                      fixedWidth={true}
                    />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
