import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className='bg-accent h-[100px] max-w-[1400px] mx-auto flex justify-between items-center'>
        <h1 className='text-3xl font-bold text-text ml-4'>Rabia Amin</h1>
        <ul className='hidden md:flex text-3xl text-text'>
          <li className='p-5'><a href='#about'>About</a></li>
          <li className='p-5'><a href='#work'>Work</a></li>
          <li className='p-5'><a href='#contact'>Contact</a></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden mr-6 text-text'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Menu */}
        <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-accent ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <h1 className='text-3xl font-bold text-text m-4'>Rabia Amin</h1>
          <ul className='p-8 text-2xl text-text'>
            <li className='p-2'>
              <a href='#home' onClick={handleNav}>Home</a>
            </li>
            <li className='p-2'>
              <a href='#about' onClick={handleNav}>About</a>
            </li>
            <li className='p-2'>
              <a href='#work' onClick={handleNav}>Work</a>
            </li>
            <li className='p-2'>
              <a href='#skills' onClick={handleNav}>Skills</a>
            </li>
            <li className='p-2'>
              <a href='#contact' onClick={handleNav}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
