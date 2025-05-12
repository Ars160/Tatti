import React from 'react';
import Button from './Button';
import Logo from '../assets/images/logo1.png';
import SearchIcon from '../assets/images/icons/search.png';
import CartIcon from '../assets/images/icons/cart.png';
import GlobeIcon from '../assets/images/icons/globe.png';
import ChevronDownIcon from '../assets/images/icons/pin.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-tatti-bg border-b border-tatti-mint">
      <div className="flex items-center space-x-6">
        <img src={Logo} alt="Tátti Logo" className="h-12" />
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Найти"
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white text-tatti-brown placeholder-tatti-brown font-lato text-base focus:outline-none shadow-sm"
          />
          <img
            src={SearchIcon}
            alt="Search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
        </div>
        <button className="flex items-center pl-2 pr-4 py-2 rounded-xl bg-tatti-gray-light hover:bg-white transition duration-300 text-tatti-brown font-lato text-base">
            <img
              src={ChevronDownIcon}
              alt="Dropdown"
              className="mr-2 w-5 h-5"
            />
            Алматы
          </button>
      </div>
      <div className="flex items-center space-x-6">
        <img src={GlobeIcon} alt="Globe" className="w-6 h-6" />
        
        <button className="flex items-center justify-center w-10 h-10 bg-tatti-pink rounded-full">
          <img src={CartIcon} alt="Cart" className="w-6 h-6" />
        </button>
        <Button
          text="Войти"
          bgColor="bg-tatti-gray-light"
          className="font-lato font-bold text-base px-6 py-2 rounded-xl shadow-sm hover:bg-white transition duration-300"
        />
      </div>
    </header>
  );
};

export default Header;