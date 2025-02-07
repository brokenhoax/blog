"use client";

import React, { useState } from "react";
import Link from "next/link";
import KcButton from "../kcbutton/KcButton";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import {
  faHome,
  faCircleQuestion,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NavBar.module.css";

function NavBar() {
  const [toggle, setToggle] = useState<boolean>(false);

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
            className={`${styles.navButton} opacity-50 group-hover:opacity-100 text-accent motion-preset-pop bg-primary hover:outline-dotted hover:outline-2 hover:outline-accent`}
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
          <div className={`${styles.navMenu} text-accent`}>
            <div
              className={`${styles.navMenuControls} motion-preset-slide-left`}
            >
              {/* Theme Switcher */}
              <ThemeSwitcher></ThemeSwitcher>
              {/* About */}
              <KcButton
                icon={faCircleQuestion}
                type="path"
                path="/pages/about"
              ></KcButton>
              {/* Home */}
              <KcButton icon={faHome} type="path" path="/"></KcButton>
              {/* Menu Button */}
              <KcButton
                icon={faBars}
                onToggle={setNavbarstatus}
                type="toggle"
              ></KcButton>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
