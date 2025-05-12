import React, { useState } from 'react';

const ProductList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
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

  // If no products, return early
  if (products.length === 0) {
    return <p className="text-tatti-brown font-lato text-base">Товары не найдены</p>;
  }

  return (
    <div className="relative">
      {/* Left Scroll Button */}
      {currentPage > 0 && (
        <button 
          onClick={scrollLeft} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 rounded-full p-2 shadow-md -ml-6"
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

      {/* Products Container */}
      <div className="flex space-x-6 overflow-hidden">
        {displayedProducts.map((product) => (
          <div 
            key={product.id} 
            className="flex-shrink-0 min-w-[348px] rounded-3xl overflow-hidden shadow-md"
          >
            <img 
              src={product.src} 
              alt={product.alt} 
              className="w-full h-[180px] object-cover" 
            />
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      {currentPage < totalPages - 1 && (
        <button 
          onClick={scrollRight} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 rounded-full p-2 shadow-md -mr-4"
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
  );
};

export default ProductList;