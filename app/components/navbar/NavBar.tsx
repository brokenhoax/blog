"use client";

import React, { useEffect, useState } from "react";
import KcButton from "../kcbutton/KcButton";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import { useNavbar } from "../../context/NavbarContext";
import {
  faHome,
  faCircleQuestion,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NavBar.module.css";

function NavBar() {
  const { isExpanded, toggleExpanded } = useNavbar();
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Function to update window size
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial window size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures this runs only once after mount

  function setNavbarstatus() {
    if (isExpanded) {
      toggleExpanded();
    } else {
      toggleExpanded();
    }
  }

  // window width
  let navMenuElements: React.ReactElement;
  if (windowSize.width < 1024) {
    navMenuElements = (
      <div className={`${styles.navMenuControls}`}>
        {/* Theme Switcher */}
        <ThemeSwitcher></ThemeSwitcher>
        {/* About */}
        <KcButton
          icon={faCircleQuestion}
          type="path"
          path="/pages/about"
          styling="motion-preset-expand"
        ></KcButton>
        <KcButton
          icon={faHome}
          type="path"
          path="/"
          styling="motion-preset-expand"
        ></KcButton>
        <KcButton
          icon={faBars}
          onToggle={setNavbarstatus}
          type="toggle"
          styling="motion-preset-expand"
        ></KcButton>
      </div>
    );
  } else {
    navMenuElements = (
      <div className={`${styles.navMenuControls}`}>
        <KcButton
          icon={faBars}
          onToggle={setNavbarstatus}
          type="toggle"
        ></KcButton>
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
    );
  }
  if (windowSize.width >= 1024) {
    if (!isExpanded) {
      return (
        <nav className={`${styles.navMenu} text-accent}`}>
          <div className={`${styles.navMenuControls} motion-preset-pop`}>
            {/* Menu Button */}
            <KcButton
              icon={faBars}
              onToggle={setNavbarstatus}
              type="toggle"
            ></KcButton>
          </div>
        </nav>
      );
    }

    if (isExpanded) {
      return (
        <div className={`${styles.navMenu} text-accent`}>{navMenuElements}</div>
      );
    }
  }
}

export default NavBar;
