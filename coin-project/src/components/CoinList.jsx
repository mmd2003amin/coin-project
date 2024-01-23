import React, { useEffect, useState } from "react";
import { getCoinList } from "./services/cryptoAPI";
import { PiChartLineDownBold, PiChartLineUpBold } from "react-icons/pi";
import loading from "../assets/loading.gif";

const CoinList = ({ data, setData, page }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const fetching = await fetch(getCoinList(page));
        const toJson = await fetching.json();
        setData(toJson);
        setIsLoading(false);
      } catch {
        prompt("error!");
      }
    };
    fetchData();
  }, [page]);

  return (
    <>
      {!isLoading ? (
        <div
          className={`${
            !data.length && "hidden"
          } text-sm xs:text-base font-vazirRegular md:font-vazirMedium text-white w-[95%] md:w-[85%] p-2 xs:p-5 rounded-md border border-solid border-white mx-auto mt-10`}
        >
          <div className="hidden md:flex centering justify-between bg-stone-900 rounded-md p-5 mb-8">
            <h3>نماد</h3>
            <h3>نام</h3>
            <h3>آخرین‌قیمت</h3>
            <h3>تغییرات‌روزانه</h3>
            <h3>نمودار</h3>
          </div>

          {data.map((coin) => (
            <div
              key={coin.id}
              className="centering justify-between p-4 mt-2 bg-stone-900 md:bg-transparent hover:bg-stone-900 duration-150 cursor-pointer rounded-md"
            >
              <img
                src={coin.image}
                alt={coin.name}
                className="size-10 xs:size-14 md:size-16"
              />

              <h1 className="hidden md:flex">{coin.name}</h1>
              <h1 className="md:hidden">{coin.symbol.toUpperCase()}</h1>

              <p>{coin.current_price} $</p>

              <p
                dir="ltr"
                className={`hidden xs:flex ${
                  coin.price_change_percentage_24h > 0
                    ? "bg-green-600"
                    : "bg-red-600"
                } p-1.5 rounded-md`}
              >
                {coin.price_change_percentage_24h.toFixed(2)} %
              </p>

              {coin.price_change_percentage_24h > 0 ? (
                <PiChartLineUpBold className="text-green-700 text-2xl xs:text-4xl" />
              ) : (
                <PiChartLineDownBold className="text-red-700 text-2xl xs:text-4xl" />
              )}
            </div>
          ))}
        </div>
      ) : (
        <img src={loading} alt="loading" className="size-28 mx-auto mt-10" />
      )}
    </>
  );
};

export default CoinList;
