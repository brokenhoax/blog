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

  const themes = ["darkOwl", "lightOwl", "dark", "light"];

  function handleToggle() {
    // Find current place in line in array
    themes.forEach((currentTheme, idx) => {
      if (theme == currentTheme) {
        // Increment by one
        idx = idx + 1;
        if (idx > themes.length - 1) {
          idx = 0;
          setTheme(themes[idx]);
          console.log(themes[idx]);
          return;
        } else {
          setTheme(themes[idx]);
          console.log(themes[idx]);
        }
      }
    });
  }

  // this line is the key to avoid the error.
  if (!hasMounted) return null;

  return (
    <button onClick={handleToggle}>
      <FontAwesomeIcon
        fixedWidth={true}
        icon={faPalette}
        size="lg"
        className={`${styles.themeSwitcherIcon}`}
      />
    </button>
  );
};

export default ThemeSwitcher;
