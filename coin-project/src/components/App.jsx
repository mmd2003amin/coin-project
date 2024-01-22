import React, { useState } from 'react';
import Navbar from './Navbar';
import Menu from "./Menu";
import Banner from './Banner';
import CoinList from './CoinList';

const App = () => {
  const [ showMenu , setShowMenu ] = useState(false);
  const [ data , setData ] = useState([]);

  return (
    <div className='bg-stone-950 min-h-[100vh] h-full'>
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      <Banner />
      <CoinList data={data} setData={setData} />
    </div>
  );
};

export default App;