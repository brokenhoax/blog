"use client";
import { useEffect, useState } from "react";
import KcButton from "../kcbutton/KcButton";
import { useTheme } from "next-themes";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

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
    <KcButton
      icon={faPalette}
      onToggle={handleToggle}
      type="toggle"
      styling="motion-preset-expand"
    ></KcButton>
  );
};

export default ThemeSwitcher;
