import React, { useState } from 'react';
import Main from '../assets/images/main_photo.png';
import Main1 from '../assets/images/main_photo1.png';
import { Link } from 'react-router-dom';

const StoreSection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const products = [
    { id: 1, src: Main, alt: 'Burger' },
    { id: 2, src: Main, alt: 'Roll' },
    { id: 3, src: Main, alt: 'Cocktail 1' },
    { id: 4, src: Main, alt: 'Cocktail 2' },
    { id: 5, src: Main1, alt: 'Cocktail 3' },
    { id: 6, src: Main, alt: 'Cocktail 4' },
    { id: 7, src: Main, alt: 'Cocktail 5' },
    { id: 8, src: Main, alt: 'Cocktail 6' },
    { id: 9, src: Main, alt: 'Cocktail 7' },
    { id: 10, src: Main, alt: 'Cocktail 8' },
  ];

  const itemsPerPage = 5;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const scrollLeft = () => {
    setCurrentPage(Math.max(0, currentPage - 1));
  };

  const scrollRight = () => {
    setCurrentPage(Math.min(totalPages - 1, currentPage + 1));
  };

  const displayedProducts = products.slice(
    currentPage * itemsPerPage, 
    (currentPage * itemsPerPage) + itemsPerPage
  );

  return (
    <section>
      <div className="flex justify-between items-center my-3">
        <h2 className="text-tatti-brown font-lato font-bold text-2xl">Магазины</h2>
        <Link to="/stores">
          <button className="text-tatti-brown bg-tatti-bg px-4 py-1 rounded-full font-lato text-md mr-2">
            Все
          </button>
        </Link>
      </div>
      
      <div className="relative flex items-center">
        {/* Left Scroll Button */}
        {currentPage > 0 && (
          <button 
            onClick={scrollLeft} 
            className="absolute left-0 z-10 bg-white/70 rounded-full p-2 shadow-md -ml-6"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-700" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
          </button>
        )}

        {/* Stores Container */}
        <div className="flex space-x-4 overflow-hidden">
          {displayedProducts.map((product) => (
            <div 
              key={product.id} 
              className="flex-shrink-0 w-[280px] rounded-lg overflow-hidden shadow-md"
            >
              <img 
                src={product.src} 
                alt={product.alt} 
                className="w-full h-[130px] object-cover" 
              />
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        {currentPage < totalPages - 1 && (
          <button 
            onClick={scrollRight} 
            className="absolute right-0 z-10 bg-white/70 rounded-full p-2 shadow-md -mr-4"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-700" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};

export default StoreSection;