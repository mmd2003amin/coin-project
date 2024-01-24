import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Chart from "./chart";

const ChartBox = ({ chart, setChart, currency }) => {
  const [type, setType] = useState("prices");

  const typeHandler = (event) => {
    if (event.target.tagName === "BUTTON") {
      setType(event.target.innerText.toLowerCase().replace(" ", "_"));
    }
  };

  const symbol = currency === "usd" ? " $" : currency === "eur" ? " €" : " ¥";
  const { coin: { current_price, ath, market_cap } } = chart;
  const aboutList = [
    { name: "Prices:", value: current_price },
    { name: "Market Caps:", value: ath },
    { name: "Total Volumes:", value: market_cap },
  ];

  return (
    <div
      dir="ltr"
      className="fixed top-0 right-0 w-full h-full backdrop-blur-sm centering"
    >
      <IoClose
        onClick={() => setChart(null)}
        className="bg-red-600 text-white rounded-md text-4xl top-7 right-7 absolute cursor-pointer"
      />

      <div className="text-white bg-blur centering items-start justify-around flex-col border border-solid border-white w-[96%] md:w-10/12 lg:w-[60%] h-4/6 p-3 xs:p-5 rounded-md">
        <div className="centering ml-[3%] font-medium">
          <img
            src={chart.coin.image}
            alt={chart.coin.name}
            className="size-10 mr-2"
          />
          <h3>{chart.coin.name}</h3>
        </div>

        <div className="w-[94%] h-[60%] mx-auto">
          <Chart data={chart} type={type} />
        </div>

        <div onClick={typeHandler} className="text-sm xs:text-base centering mx-auto xs:ml-[3%] buttons-chart">
          <button className={`${type === "prices" && "bg-blue-600"}`}>
            Prices
          </button>
          <button className={`${type === "market_caps" && "bg-blue-600"}`}>
            Market Caps
          </button>
          <button className={`${type === "total_volumes" && "bg-blue-600"}`}>
            Total Volumes
          </button>
        </div>

        <div className="text-sm xs:text-base centering flex-col sm:flex-row items-start sm:items-center about-chart ml-[3%]">
          {aboutList.map((item) => (
            <div className="centering xs:mr-5 mt-2">
              <h5>{item.name}</h5>
              <span>{symbol}{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
