"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const themesArray = ["darkOwl", "lightOwl", "orangeOwl"];
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

    // Find current place in line in array

    // Increment by one
  }

  // this line is the key to avoid the error.
  if (!hasMounted) return null;

  if (theme === "lightOwl") {
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
  }

  if (theme === "darkOwl") {
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
  }
};

export default ThemeSwitcher;
