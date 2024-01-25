import React from "react";

import Card from "./Card";
import { cardsData } from "../../constant/cardsData";

const Cards = () => {
  return (
    <div className="mt-32 pb-10 max-w-[90%] sm:max-w-[70%] lg:max-w-[85%] mx-auto font-vazirMedium">
      <h1 className="text-white dark:text-black text-center mb-7 text-[22px] lg:text-[26px] font-black">
        پلتفرم حرفه ای خرید و فروش ارز دیجیتال
      </h1>

      <h5 className="text-center mb-14 text-sm 1120:text-lg text-gray-400 dark:text-gray-700 font-vazirRegular">
        چرا باید صرافی همتاپی را انتخاب کنیم ؟
      </h5>
      
      <div className="lg:centering justify-between">
        {cardsData.map((card, index) => (
          <Card key={index} data={card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
