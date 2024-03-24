import {  Nunito } from "next/font/google";
import "./globals.css";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Md Akash Khan",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <li>Home</li>
          <li>About</li>
        </nav>
        {children}
        </body>
    </html>
  );
}
