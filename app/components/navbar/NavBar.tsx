"use client";

import React, { useState } from "react";
import KcButton from "../kcbutton/KcButton";
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
      <nav className={`${styles.navBar}`}>
        <div className={`${styles.navWrapper}`}>
          <div className={`${styles.navMenu} text-accent`}>
            <div className={`${styles.navMenuControls} motion-preset-pop`}>
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

  if (toggle) {
    return (
      <nav className={`${styles.navBar}`}>
        <div className={`${styles.navWrapper}`}>
          <div className={`${styles.navMenu} text-accent`}>
            <div
              className={`${styles.navMenuControls} motion-preset-slide-down`}
            >
              {/* Menu Button */}
              <KcButton
                icon={faBars}
                onToggle={setNavbarstatus}
                type="toggle"
              ></KcButton>
              {/* Home */}
              <KcButton icon={faHome} type="path" path="/"></KcButton>
              {/* About */}
              <KcButton
                icon={faCircleQuestion}
                type="path"
                path="/pages/about"
              ></KcButton>
              {/* Theme Switcher */}
              <ThemeSwitcher></ThemeSwitcher>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
