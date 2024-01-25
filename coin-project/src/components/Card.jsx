import React from "react";

const Card = ({ data: { image, title, name } }) => {
  return (
    <div
      className="w-[96%] xs:w-10/12 mx-auto lg:m-4 rounded-3xl h-fit p-5 mb-7 hover:scale-110 duration-500 cursor-pointer bg-stone-900 dark:bg-white"
    >
      <img src={image} alt={name} className="mx-auto w-44 mt-6" />
      <h1 className="text-center text-white dark:text-black text-lg font-black mt-8">{name}</h1>
      <p className="mx-auto mt-5 text-gray-400 dark:text-gray-700 font-vazirRegular text-sm text-center mb-6 max-w-[97%]">
        {title}
      </p>
    </div>
  );
};

export default Card;
