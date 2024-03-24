"use client";

import myPhoto from "@/public/Images/myPhoto.png";
import Image from "next/image";
import Navlink from "@/app/components/Navlink.js";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "My Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [isActive,setIsActive] = useState(true)

  const handleToggle = ()=> {
    setIsActive(!isActive)
  }

  return (
    <>
      {/* sidebar */}
      <div
        className={`z-10 fixed  flex flex-col justify-between overflow-x-hidden overflow-y-hidden w-72 space-y-6 px-2 py-4  border-r border-r-pink-500  inset-y-0 left-0 transform bg-white dark:bg-[#191D2B] ${
          isActive && "-translate-x-full"
        }  xl:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div className="w-full flex px-4 py-5  justify-center items-center  mx-auto border-b border-b-pink-500  dark:border-[#F31559]">
            <Image
              src={myPhoto}
              className="rounded-full   p-1"
              alt="Akash Khan"
              width={192}
            />
          </div>
          {/* <hr className="" /> */}
        </div>

        {/* Nav Items */}

        <div className="flex flex-col ">
          <nav className="text-center ">
            {navLinks.map((link, i) => {
              const active = pathname===(link.href);
              return (
                <Link
                  key={i}
                  href={link.href}
                  className={`flex justify-center px-4 py-2 my-1 dark:text-white uppercase transition-colors duration-300 transform hover:bg-[#F31559] hover:text-white ${
                    active && "bg-[#F31559] text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div>
          <p className="text-black dark:text-white text-center py-3 flex justify-center items-center border-t border-t-pink-500">
            © 2023 | <b> Akash Ali</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
