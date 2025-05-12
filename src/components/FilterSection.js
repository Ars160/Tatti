import React from 'react';

const FilterSection = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    { name: 'Все', href: '#' },
    { name: 'Самовывоз', href: '#' },
    { name: 'Бургеры', href: '#' },
    { name: 'Суши', href: '#' },
    { name: 'Пицца', href: '#' },
    { name: 'Вок', href: '#' },
    { name: 'Паста', href: '#' },
    { name: 'Завтраки', href: '#' },
    { name: 'Обеды', href: '#' },
    { name: 'Ещё', isMore: true },
  ];

  return (
    <div className="mb-6">
      <h2 className="text-tatti-brown font-lato font-bold text-2xl mb-2">Что заказать</h2>
      <div className="bg-tatti-bg p-2 rounded-2xl shadow-md">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-2 overflow-x-auto hide-scrollbar">
            {filters.map((filter, index) => (
              <div key={index} className="flex-shrink-0">
                {filter.isMore ? (
                  <button
                    className="flex items-center px-4 py-2 text-tatti-brown font-lato text-base rounded-xl hover:bg-white transition duration-300"
                    aria-label="Открыть ещё фильтры"
                    onClick={() => alert('Открыть дополнительные фильтры')}
                  >
                    {filter.name}
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeWidth="1.5"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveFilter(filter.name)}
                    className={`px-4 py-2 text-base font-lato rounded-xl transition duration-300 ${
                      activeFilter === filter.name
                        ? 'bg-white text-tatti-brown font-medium shadow-sm'
                        : 'text-tatti-brown hover:bg-white'
                    }`}
                    aria-label={filter.name}
                  >
                    {filter.name}
                  </button>
                )}
              </div>
            ))}
          </div>

          <button className="flex items-center px-4 py-2 text-tatti-brown font-lato font-medium text-base hover:bg-white transition duration-300 rounded-xl">
            <svg
              className="w-5 h-5 mr-2 mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
              />
            </svg>
            Сортировка
          </button>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default FilterSection;