"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="darkOwl"
      themes={["dark", "light", "darkOwl", "lightOwl"]}
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}
