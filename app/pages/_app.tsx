import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "";

function MyApp({ Component, pageProps }) {
  return (
    <NextThemesProvider attribute="class">
      <Component {...pageProps} />
    </NextThemesProvider>
  );
}

export default MyApp;
