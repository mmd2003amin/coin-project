import React from "react";

import FooterItems from "./FooterItems";
import { dataFooter } from "../../constant/dataFooter";

const Footer = () => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 bg-stone-900 dark:bg-white mx-auto max-w-[90%] sm:max-w-[80%] lg:max-w-[85%] rounded-md mt-16 text-center p-5`}
    >
      {dataFooter.map((item) => (
        <FooterItems key={Math.random() * 100} data={item} />
      ))}

      <h1 className="font-vazirExtraBold font-black text-white dark:text-black mb-2.5 lg:mb-5 text-lg lg:text-[20px]">
        از آخرین اخبار باخبر شوید
      </h1>

      <div className="max-w-[90%] mx-auto">
        <input
          className="text-[11px] md:text-[12px] text-gray-600 w-[70%] h-9 sm:h-10 border-l-0 border-gray-400 border border-solid rounded-s-md outline-none pr-2 placeholder:text-gray-400 font-semibold"
          type="text"
          placeholder="آدرس ایمیل ..."
        />
        <button className="rounded-e-md bg-blue-600 h-9 sm:h-10 w-[30%] md:w-[25%] outline-none text-white font-normal text-sm">
          ارسال
        </button>
      </div>
    </div>
  );
};

export default Footer;
