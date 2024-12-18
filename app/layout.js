import "./global.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import { Bitter, IBM_Plex_Mono, Noto_Sans, PT_Serif } from "next/font/google";
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

const font = Noto_Sans({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

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

export const metadata = {
  title: "Kraus Cloud Blog",
  description: "A tech blog.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <body className={`${font.className} bg-primary text-secondary`}>
        <Providers>
          <NavBar></NavBar>
          {children}
          <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}
