import React from "react";

import logo from "../assets/logo-banner.webp";
import { DiAndroid } from "react-icons/di";
import { FaApple } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="mt-10 text-white centering justify-between lg:w-[90%]">
      <div className="w-[95%] md:w-[60%] lg:w-1/2 mx-auto md:mr-10 font-vazirMedium lg:ml-5">
        <h1 className="text-xl font-vazirBold">
          صرافی ارز دیجیتال همتاپی خرید و فروش آسان ارزهای دیجیتال
        </h1>

        <p className="text-gray-400 font-vazirRegular my-5">
          با ثبت نام و احراز هویت آسان در صرافی آنلاین همتاپی لذت خرید و فروش
          ارزهای دیجیتال را تجربه کنید. سطح متفاوتی از کیفیت خدمات را به سهولت
          در خدمت گرفته و به کسب سود از فرصت‌های نامحدود دنیای رمزارزها
          بپردازید.
        </p>

        <button className="w-full h-14 button bg-blue-600 border-blue-600">
          شروع کنید
        </button>

        <div className="w-full centering justify-between mt-3 font-vazirRegular">
          <button className="button h-14 w-1/2 ml-1 centering">
            <FaApple className="text-2xl ml-1" />
            <span className="text-xs sm:text-base">دانلود وب اپلیکیشن IOS</span>
          </button>

          <button className="button h-14 w-1/2 mr-1 centering">
            <DiAndroid className="text-2xl ml-1" />
            <span className="text-xs sm:text-base">
              دانلود وب اپلیکیشن Android
            </span>
          </button>
        </div>
      </div>

      <img src={logo} alt="logo" className="hidden lg:flex mr-5" />
    </div>
  );
};

export default Banner;
