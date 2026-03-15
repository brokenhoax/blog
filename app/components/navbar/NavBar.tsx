"use client";

import React, { useEffect, useState } from "react";
import KcButton from "../kcbutton/KcButton";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import { useNavbar } from "../../context/NavbarContext";
import { usePathname } from "next/navigation";
import {
  faHome,
  faCircleQuestion,
  faBars,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NavBar.module.css";

function NavBar({ marginTop = "mt-[11rem]" }: { marginTop?: string }) {
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

  // Sort navbar elements based on window size
  let navMenuElements: React.ReactElement;
  if (windowSize.width < 1024) {
    navMenuElements = (
      <div className={`${styles.navMenuControls}`}>
        {/* Theme Switcher */}
        <ThemeSwitcher></ThemeSwitcher>
        {/* Chat */}
        <KcButton
          icon={faRobot}
          type="path"
          path="/pages/chat"
          styling="motion-preset-expand"
        ></KcButton>
        {/* About */}
        <KcButton
          icon={faCircleQuestion}
          type="path"
          path="/pages/about"
          styling="motion-preset-expand"
        ></KcButton>
        {/* Home */}
        <KcButton
          icon={faHome}
          type="path"
          path="/"
          styling="motion-preset-expand"
        ></KcButton>
        {/* About */}
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
        {/* Menu */}
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
        {/* Chat */}
        <KcButton
          icon={faRobot}
          type="path"
          path="/pages/chat"
          styling="motion-preset-expand"
        ></KcButton>
        {/* Theme Switcher */}
        <ThemeSwitcher></ThemeSwitcher>
      </div>
    );
  }

  // Show navbar on larger screens
  if (windowSize.width >= 1024) {
    if (!isExpanded) {
      return (
        <nav className={`${styles.navMenu} ${marginTop}`}>
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
        <div className={`${styles.navMenu}  ${marginTop} text-accent`}>
          {navMenuElements}
        </div>
      );
    }
  }

  // Show navbar on smaller screens
  if (windowSize.width < 1024 && isExpanded) {
    return (
      <nav
        className={`z-100 fixed bottom-4 right-4 flex justify-end motion-preset-pop`}
      >
        {navMenuElements}
      </nav>
    );
  } else if (windowSize.width < 1024 && !isExpanded) {
    return (
      <nav
        className={`z-100 fixed bottom-4 right-4 flex justify-end motion-preset-pop`}
      >
        {/* Menu Button */}
        <KcButton
          icon={faBars}
          onToggle={setNavbarstatus}
          type="toggle"
        ></KcButton>
      </nav>
    );
  }
}

export default NavBar;
