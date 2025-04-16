"use client";

import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import { useNavbar } from "../../context/NavbarContext";
import KcButton from "../kcbutton/KcButton";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import {
  faHome,
  faCircleQuestion,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";

function Footer() {
  const { isExpanded, toggleExpanded } = useNavbar(); // Consume the Navbar context
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

  if (windowSize.width < 1024) {
    if (!isExpanded) {
      return (
        <nav
          className={`${styles.footer} bg-primary text-accent border-t border-t-subtle`}
        >
          <div className={`${styles.footerWrapper} motion-preset-pop`}>
            <div className={`${styles.navMenuControls}`}>
              {/* Menu Button */}
              <KcButton
                icon={faBars}
                onToggle={setNavbarstatus}
                type="toggle"
              ></KcButton>
            </div>
          </div>
        </nav>
      );
    }

    if (isExpanded) {
      return (
        <nav
          className={`${styles.footer} bg-primary text-accent border-t border-t-subtle`}
        >
          <div className={`${styles.footerWrapper} motion-preset-pop`}>
            {/* Menu Button */}
            {navMenuElements}
          </div>
        </nav>
      );
    }
  }
}

export default Footer;
