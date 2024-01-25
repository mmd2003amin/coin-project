import React, { useEffect, useState } from 'react';

import Navbar from './Navbar';
import Menu from "./Menu";
import Banner from './Banner';
import CoinList from './CoinList';
import Pagination from './Pagination';
import Search from './Search';
import ChartBox from './ChartBox';
import Cards from './Cards';
import Footer from './Footer';

const App = () => {
  const [ showMenu , setShowMenu ] = useState(false);
  const [page, setPage] = useState(1);
  const [ currency , setCurrency ] = useState("usd");
  const [ search , setSearch ] = useState("");
  const [ chart , setChart ] = useState(null);
  const [ theme , setTheme ] = useState("dark");
  const element = document.documentElement;

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.remove("dark")
        break;
      case "light":
        element.classList.add("dark")
        break;
    }
  } , [theme])

  return (
    <div className='bg-stone-950 min-h-[100vh] h-full pb-1 dark:bg-[#eee] text-black'>
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} theme={theme} setTheme={setTheme} />
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} theme={theme} setTheme={setTheme} />
      <Banner />
      <Search currency={currency} setCurrency={setCurrency} setSearch={setSearch} />
      <CoinList page={page} search={search} currency={currency} setChart={setChart}/>
      <Pagination page={page} setPage={setPage}/>
      {chart && <ChartBox chart={chart} setChart={setChart} currency={currency}/>}
      <Cards />
      <Footer />
    </div>
  );
};

export default App;