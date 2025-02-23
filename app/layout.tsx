import "./global.css";
import { NavbarProvider } from "../app/context/NavbarContext";
import {
  Bitter,
  IBM_Plex_Mono,
  Noto_Sans,
  PT_Serif,
  Ubuntu,
} from "next/font/google";
import { Providers } from "./providers";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/free-brands-svg-icons";
config.autoAddCss = false;

// If loading a variable font, you don't need to specify the font weight
// const font = IBM_Plex_Mono({
//   subsets: ["latin"],
//   style: ["italic", "normal"],
//   weight: ["100", "200", "300", "400", "500", "600", "700"],
//   display: "swap",
// });

// const font = Noto_Sans({
//   subsets: ["latin"],
//   style: ["italic", "normal"],
//   weight: ["100", "200", "300", "400", "500", "600", "700"],
//   display: "swap",
// });

// const font = PT_Serif({
//   subsets: ["latin"],
//   style: ["italic", "normal"],
//   weight: ["400", "700"],
//   display: "swap",
// });

// const font = Bitter({
//   subsets: ["latin"],
//   style: ["italic", "normal"],
//   weight: ["400", "700"],
//   display: "swap",
// });

const font = Ubuntu({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "Kraus Cloud Blog",
  description: "A tech blog.",
};

export interface NavbarStatus {
  isExpanded: Boolean;
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
      className={`bg-primary`}
    >
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml"></link>
        <link rel="icon" href="/favicon.ico" sizes="32x32"></link>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
      </head>
      <body className={`${font.className} bg-primary text-secondary`}>
        <Providers>
          <NavbarProvider>{children}</NavbarProvider>
        </Providers>
      </body>
    </html>
  );
}
