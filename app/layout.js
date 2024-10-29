import "./global.css";
import { IBM_Plex_Mono } from "next/font/google";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import { Providers } from "./providers";
import "./global.css";

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
    <html
      lang="en"
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <body className={`${font.className} bg-primary`}>
        <Providers>
          <NavBar></NavBar>
          {children}
          <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}
