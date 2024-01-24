import React from "react";

const Search = ({ currency , setCurrency, setSearch }) => {

  return (
    <div className="centering mt-28 w-[80%] lg:w-[60%] mx-auto">
      <select
        value={currency}
        onChange={(event) => setCurrency(event.target.value)}
        className="bg-stone-900 text-white p-4 rounded-md ml-2 outline-none"
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>

      <input
        type="text"
        placeholder="جستجو..."
        onChange={(event) => setSearch(event.target.value.trim().toUpperCase())}
        className="bg-stone-900 outline-none rounded-md w-[90%] text-white p-2 h-14 placeholder:text-stone-400 font-vazirMedium text-base font-bold"
      />
    </div>
  );
};

export default Search;