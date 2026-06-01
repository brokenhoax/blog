"use client";
import { useEffect, useState } from "react";
import KcButton from "../kcbutton/KcButton";
import { useTheme } from "next-themes";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

const themes = ["black", "darkOwl", "light", "preppy"];

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);

  function handleToggle() {
    const idx = themes.indexOf(theme ?? "");
    setTheme(themes[(idx + 1) % themes.length]);
  }

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
