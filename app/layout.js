import {  Nunito } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar/Sidebar";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Md Akash Khan",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className="relative min-h-screen md:flex">
      {/* Sidebar */}
      <Sidebar />
      {/*  */}
      <div className="flex-1 xl:ml-64 bg-[#e9e9fc] dark:bg-[#10121A]  duration-300 overflow-x-hidden overflow-y-hidden">
        <div className=" container mx-auto  xl:p-20 lg:p-10 md:p-8 p-5  ">
          {children}
        </div>
      </div>
      <div className="fixed right-0 top-1/3">
        
      </div>
    </main>
       
        </body>
    </html>
  );
}
