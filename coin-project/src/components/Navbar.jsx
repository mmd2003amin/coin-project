import React from "react";
import { FaBitcoin } from "react-icons/fa";
import { IoIosMoon } from "react-icons/io";
import { IoSunnySharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

import pages from "../../constant/pages";

const Navbar = ({ setShowMenu, theme , setTheme }) => {
  return (
    <div className="sticky top-0 centering justify-between bg-blur dark:bg-blur-light text-white dark:text-black font-vazirMedium p-4">
      <FaBitcoin className="font-b text-4xl dark:text-black" />

      <ul className="hidden md:flex w-[70%]">
        {pages.map((page, index) => (
          <li
            key={index}
            className="text-sm lg:text-base relative after:after-list-menu ml-5 cursor-pointer"
          >
            {page}
          </li>
        ))}
      </ul>

      <IoIosMoon
        onClick={() => setTheme("light")}
        className={`${theme === "light" && "md:hidden"} hidden md:flex text-[40px] dark-mode-icon mr-[-100px]`}
      />
      <IoSunnySharp 
        onClick={() => setTheme("dark")}
        className={`${theme === "dark" && "md:hidden"} hidden md:flex text-[40px] dark-mode-icon border-black text-black mr-[-100px]`}
      />

      <div className="hidden md:flex centering">
        <button className="button">ورود</button>
        <button className="button mr-2 bg-blue-600 border-blue-600 dark:border-blue-600 dark:text-white">
          ثبت‌نام
        </button>
      </div>

      <IoMenu
        onClick={() => setShowMenu(true)}
        className="font-b text-4xl md:hidden"
      />
    </div>
  );
};

export default Navbar;
