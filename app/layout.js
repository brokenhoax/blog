import "./global.css";
// import NavBar from "./components/navbar/NavBar";
import { IBM_Plex_Mono } from "next/font/google";
import Head from "next/head";

// If loading a variable font, you don't need to specify the font weight
const font = IBM_Plex_Mono({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Kraus Cloud Blog",
  description: "A tech blog.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }} className="dark">
      <body className={`${font.className}`}>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          ></link>
          <link rel="manifest" href="/favicons/site.webmanifest"></link>
        </Head>
        {/* <NavBar></NavBar> */}
        {children}
      </body>
    </html>
  );
}
