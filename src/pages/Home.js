import React, { useState } from 'react';
import Header from '../components/Header';
import StoreSection from '../components/StoreSection';
import FilterSection from '../components/FilterSection';
import ProductList from '../components/ProductList';
import Main from '../assets/images/main_photo.png';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('Все');

  const products = [
    { id: 1, src: Main, alt: 'Burger', category: 'Бургеры' },
    { id: 2, src: Main, alt: 'Sushi', category: 'Суши' },
    { id: 3, src: Main, alt: 'Pizza', category: 'Пицца' },
    { id: 4, src: Main, alt: 'Wok', category: 'Вок' },
    { id: 5, src: Main, alt: 'Pasta', category: 'Паста' },
    { id: 6, src: Main, alt: 'Breakfast', category: 'Завтраки' },
    { id: 7, src: Main, alt: 'Lunch', category: 'Обеды' },
  ];

  const filteredProducts = activeFilter === 'Все'
    ? products
    : products.filter((product) => product.category === activeFilter);

  return (
    <>
      <Header />
      <section className="px-8 flex flex-col gap-6">
        <StoreSection />
        <FilterSection activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <ProductList products={filteredProducts} />
      </section>
    </>
  );
};

export default Home;