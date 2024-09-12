import "./global.css";

import { Ysabeau_Infant } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const font = Ysabeau_Infant({
  weight: "400",
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
});

export const metadata = {
  title: "Kraus Cloud Blog",
  description: "A tech blog...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }} className="dark">
      <body className={`${font.className}`}>{children}</body>
    </html>
  );
}
