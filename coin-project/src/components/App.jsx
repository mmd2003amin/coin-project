import React, { useState } from 'react';
import Navbar from './Navbar';
import Menu from "./Menu";
import Banner from './Banner';

const App = () => {
  const [ showMenu , setShowMenu ] = useState(false);

  return (
    <div className='bg-stone-950 min-h-[100vh] h-full'>
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      <Banner />
    </div>
  );
};

export default App;