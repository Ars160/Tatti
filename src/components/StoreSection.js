import React from 'react';
import Main from '../assets/images/main_photo.png'

const StoreSection = () => {
  const products = [
    { id: 1, src: `${Main}`, alt: 'Burger' },
    { id: 2, src: `${Main}`, alt: 'Roll' },
    { id: 3, src: `${Main}`, alt: 'Cocktail 1' },
    { id: 4, src: `${Main}`, alt: 'Cocktail 2' },
    { id: 5, src: `${Main}`, alt: 'Cocktail 3' },
    { id: 6, src: `${Main}`, alt: 'Cocktail 3' },
    { id: 7, src: `${Main}`, alt: 'Cocktail 3' },
    { id: 8, src: `${Main}`, alt: 'Cocktail 3' },
  ];

  return (
    <section className="py-6 px-8 bg-tatti-bg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-tatti-brown font-lato font-bold text-2xl">Магазины</h2>
      </div>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {products.map((product) => (
          <div key={product.id} className="min-w-[232px] rounded-lg overflow-hidden shadow-md">
            <img src={product.src} alt={product.alt} className="w-full h-130 object-cover" />
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default StoreSection;