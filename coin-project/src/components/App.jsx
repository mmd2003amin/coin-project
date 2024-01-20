import React, { useState } from 'react';
import Navbar from './Navbar';
import Menu from "./Menu";

const App = () => {
  const [ showMenu , setShowMenu ] = useState(false);

  return (
    <div className='bg-stone-950 h-[100vh]'>
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default App;