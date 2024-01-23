import React, { useState } from 'react';
import Navbar from './Navbar';
import Menu from "./Menu";
import Banner from './Banner';
import CoinList from './CoinList';
import Pagination from './Pagination';
import Search from './Search';

const App = () => {
  const [ showMenu , setShowMenu ] = useState(false);
  const [ data , setData ] = useState([]);
  const [page, setPage] = useState(1);
  const [ currency , setCurrency ] = useState("usd");
  const [ search , setSearch ] = useState("");

  return (
    <div className='bg-stone-950 min-h-[100vh] h-full'>
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      <Banner />
      <Search currency={currency} setCurrency={setCurrency} setSearch={setSearch} />
      <CoinList data={data} setData={setData} page={page} search={search} currency={currency}/>
      <Pagination page={page} setPage={setPage}/>
    </div>
  );
};

export default App;