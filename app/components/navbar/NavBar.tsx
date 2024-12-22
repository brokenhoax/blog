"use client";
import React, { useState } from "react";
import Link from "next/link";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import { faBars, faHome, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NavBar.module.css";

function NavBar() {
  // const toggle = true;
  const [toggle, setToggle] = useState<boolean>(false);
  const navLinks = [
    {
      title: "Home",
      path: "/",
      awesomeIcon: faHome,
    },
    {
      title: "About",
      path: "/pages/about",
      awesomeIcon: faQuestion,
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
          <FontAwesomeIcon icon={faBars} size="xl" />
        </button>
      </div>
    );
  }

  if (toggle) {
    return (
      <div className={`${styles.navMenu} bg-subtle text-accent border-accent`}>
        <div className={`${styles.navMenuContols}`}>
          <ul className={`${styles.navMenuLinks}`}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path} className={`${styles.navMenuLink}`}>
                  <FontAwesomeIcon icon={link.awesomeIcon} size="xl" />
                </Link>
              </li>
            ))}
            <li className={`${styles.navMenuLink}`}>
              <ThemeSwitcher />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faBars}
                size="xl"
                className={`${styles.navMenuLink}`}
                onClick={setNavbarstatus}
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }

  // if (toggle) {
  //   return (
  //     <div className={`${styles.navbar} bg-primary text-accent`}>
  //       <div className={`${styles.navbarControls}`}>
  //         {/* Left */}
  //         <div className={`${styles.navbarControlsLeft}`}>
  //           <button
  //             onClick={setNavbarstatus}
  //             className={`${styles.navbarMinimalButton}`}
  //           ></button>
  //           <ul className={`${styles.navbarLinks}`}>
  //             {navLinks.map((link, index) => (
  //               <li className={`${styles.navbarLinkItem}`} key={index}>
  //                 <button>
  //                   <Link
  //                     className={`${styles.navbarLink} hover:border-b hover:border-b-accent`}
  //                     href={link.path}
  //                   >
  //                     {link.title}
  //                   </Link>
  //                 </button>
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //         {/* Right */}
  //         <ThemeSwitcher />
  //       </div>
  //     </div>
  //   );
  // }
}

export default NavBar;
