import React, { useState } from 'react';
import Navbar from './Navbar';
import Menu from "./Menu";
import Banner from './Banner';
import CoinList from './CoinList';
import Pagination from './Pagination';
import Search from './Search';
import ChartBox from './ChartBox';
import Cards from './Cards';

const App = () => {
  const [ showMenu , setShowMenu ] = useState(false);
  const [page, setPage] = useState(1);
  const [ currency , setCurrency ] = useState("usd");
  const [ search , setSearch ] = useState("");
  const [ chart , setChart ] = useState(null);

  return (
    <div className='bg-stone-950 min-h-[100vh] h-full'>
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      <Banner />
      <Search currency={currency} setCurrency={setCurrency} setSearch={setSearch} />
      <CoinList page={page} search={search} currency={currency} setChart={setChart}/>
      <Pagination page={page} setPage={setPage}/>
      {chart && <ChartBox chart={chart} setChart={setChart} currency={currency}/>}
      <Cards />
    </div>
  );
};

export default App;