"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
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
      <nav>
        <button
          className={`${styles.navWrapper} group`}
          onClick={setNavbarstatus}
        >
          <div
            className={`${styles.navButton} opacity-50 group-hover:opacity-100 text-accent motion-preset-pop bg-primary border border-dashed border-accent`}
          >
            <span className={`${styles.navButtonContols}`}>
              <FontAwesomeIcon
                icon={faBars}
                size="lg"
                className={`group-hover:opacity-100`}
                fixedWidth={true}
              />
            </span>
          </div>
        </button>
      </nav>
    );
  }

  if (toggle) {
    return (
      <nav>
        <div className={`${styles.navWrapper}`}>
          <div className={`${styles.navMenu} bg-primary text-accent`}>
            <div
              className={`${styles.navMenuControls} motion-preset-slide-left`}
            >
              <ul className={`${styles.navMenuLinks}`}>
                <li className={`${styles.navMenuLink}`}>
                  <ThemeSwitcher />
                </li>
                {navLinks.map((link, index) => (
                  <li
                    key={index}
                    className={`${styles.navMenuLink} motion-preset-slide-left`}
                  >
                    <Link href={link.path}>
                      <FontAwesomeIcon
                        icon={link.awesomeIcon}
                        size="lg"
                        className={`${styles.navMenuIcon} ${
                          pathname === link.path ? "opacity-100" : "opacity-50"
                        }`}
                      />
                    </Link>
                  </li>
                ))}
                <li
                  className={`${styles.navMenuLink} motion-preset-slide-left`}
                >
                  <button
                    onClick={setNavbarstatus}
                    className={`${styles.navButtonContols}`}
                  >
                    <FontAwesomeIcon
                      icon={faBars}
                      size="lg"
                      className={`${styles.navMenuIcon} opacity-50`}
                      onClick={setNavbarstatus}
                      fixedWidth={true}
                    />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
