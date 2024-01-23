import React, { useState } from 'react';
import Navbar from './Navbar';
import Menu from "./Menu";
import Banner from './Banner';
import CoinList from './CoinList';
import Pagination from './Pagination';

const App = () => {
  const [ showMenu , setShowMenu ] = useState(false);
  const [ data , setData ] = useState([]);
  const [page, setPage] = useState(1);

  return (
    <div className='bg-stone-950 min-h-[100vh] h-full'>
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      <Banner />
      <CoinList data={data} setData={setData} page={page} />
      <Pagination page={page} setPage={setPage}/>
    </div>
  );
};

export default App;