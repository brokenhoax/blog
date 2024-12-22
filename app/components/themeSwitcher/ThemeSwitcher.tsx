"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true));
  useEffect(() => {
    if (theme === "dark" || theme === "light" || !theme) {
      setTheme("darkOwl");
    }
  }, []);

  function handleToggle() {
    if (theme === "darkOwl") {
      setTheme("lightOwl");
    }
    if (theme === "lightOwl") {
      setTheme("darkOwl");
    }
  }

  // this line is the key to avoid the error.
  if (!hasMounted) return null;

  // if (theme === "lightOwl") {
  //   return (
  //     <div className={`${styles.toggleBtnWrapper}`}>
  //       <button
  //         onClick={handleToggle}
  //         className={`${styles.toggleBtn} ${
  //           theme === "lightOwl" ? styles.toggled : ""
  //         } bg-subtle border-2 border-accent`}
  //       >
  //         <div className={`${styles.thumb} bg-primary border-2 border-accent`}>
  //           <i
  //             className={`${
  //               theme === "lightOwl"
  //                 ? "fas fa-moon darkOwl:text-accent text-xs"
  //                 : "fas fa-sun darkOwl:text-accent text-xs"
  //             }`}
  //           ></i>
  //         </div>
  //       </button>
  //     </div>
  //   );
  // }

  // if (theme === "darkOwl") {
  //   return (
  //     <div className={`${styles.toggleBtnWrapper}`}>
  //       <button
  //         onClick={handleToggle}
  //         className={`${styles.toggleBtn} ${
  //           theme === "darkOwl" ? "" : styles.toggled
  //         } bg-subtle border-2 border-accent`}
  //       >
  //         <div className={`${styles.thumb} bg-primary border-2 border-accent`}>
  //           <i
  //             className={`${
  //               theme === "darkOwl"
  //                 ? "fas fa-moon darkOwl:text-accent text-xs"
  //                 : "fas fa-sun darkOwl:text-accent text-xs"
  //             }`}
  //           ></i>
  //         </div>
  //       </button>
  //     </div>
  //   );
  // }

  if (theme === "lightOwl") {
    return (
      <button onClick={handleToggle}>
        <FontAwesomeIcon icon={faPalette} size="xl" />
      </button>
    );
  }

  if (theme === "darkOwl") {
    return (
      <button onClick={handleToggle}>
        <FontAwesomeIcon icon={faPalette} size="xl" />
      </button>
    );
  }
};

export default ThemeSwitcher;
