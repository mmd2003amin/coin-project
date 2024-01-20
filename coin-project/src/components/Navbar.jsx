import React from "react";
import { FaBitcoin } from "react-icons/fa";
import { IoIosMoon } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

import pages from "../../constant/pages";

const Navbar = ({ setShowMenu }) => {
  return (
    <div className="centering justify-between bg-stone-900 text-white font-vazirMedium p-4">
      <FaBitcoin className="font-b text-4xl" />

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

      <IoIosMoon className="hidden md:flex text-[40px] dark-mode-icon mr-[-100px]" />

      <div className="hidden md:flex centering">
        <button className="button">ورود</button>
        <button className="button mr-2 bg-blue-600 border-blue-600">
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
