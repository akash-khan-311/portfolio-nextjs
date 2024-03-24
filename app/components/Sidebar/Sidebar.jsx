"use client";

import { useState } from "react";
import myPhoto from "@/public/Images/myPhoto.png";
import Image from "next/image";
import Navlink from "../Navlink/Navlink";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(true);
  const handleToggle = () => {
    setIsActive(!isActive);
  };
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
            <Navlink href={"/"}>Home</Navlink>
            <Navlink href={"/about"}>About</Navlink>
            <Navlink href={"/skills"}>My Skills</Navlink>
            <Navlink href={"/projects"}>Projects</Navlink>
            <Navlink href={"/blogs"}>Blogs</Navlink>
            <Navlink href={"/contact"}>Contact</Navlink>
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
