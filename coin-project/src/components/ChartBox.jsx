import React from "react";
import { IoClose } from "react-icons/io5";

const ChartBox = ({ setChart }) => {

  return (
    <div className="fixed top-0 right-0 w-full h-full backdrop-blur-sm centering">
      <IoClose
        onClick={() => setChart(null)}
        className="bg-red-600 text-white rounded-md text-4xl top-7 right-7 absolute cursor-pointer"
      />

      <div className="text-white bg-stone-900 border border-solid border-white w-1/2 h-3/5 rounded-md">
        
      </div>
    </div>
  );
};

export default ChartBox;
