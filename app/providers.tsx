"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark-owl"
      themes={["dark", "light", "dark-owl", "light-owl"]}
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}
