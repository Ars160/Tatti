import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-4">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="min-w-[232px] rounded-lg overflow-hidden shadow-md">
            <img src={product.src} alt={product.alt} className="w-full h-[130px] object-cover" />
          </div>
        ))
      ) : (
        <p className="text-tatti-brown font-lato text-base">Товары не найдены</p>
      )}
    </div>
  );
};

export default ProductList;