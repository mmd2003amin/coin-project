import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import pages from "../../constant/pages";

const Menu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "translate-x-0" : "translate-x-96"
      } md:hidden duration-500 bg-stone-900 text-white w-1/2 h-fit fixed top-0 p-4 rounded-l-lg`}
    >
      <IoCloseSharp
        onClick={() => setShowMenu(!showMenu)}
        className="absolute top-5 left-5 text-3xl"
      />

      <ul className="mt-14">
        {pages.map((page, index) => (
          <li key={index} className="mb-2 cursor-pointer">
            {page}
          </li>
        ))}
      </ul>

      <IoIosMoon className="mt-5 mx-auto text-[45px] dark-mode-icon" />

      <div className="mt-5 centering justify-between">
        <button className="button">ورود</button>
        <button className="button border-blue-600 bg-blue-600">ثبت‌نام</button>
      </div>
    </div>
  );
};

export default Menu;
