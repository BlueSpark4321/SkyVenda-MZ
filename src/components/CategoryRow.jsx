import React from 'react';

const categories = [
  { id: 1, name: 'Smartphones', icon: '📱' },
  { id: 2, name: 'Laptops', icon: '💻' },
  { id: 3, name: 'Áudio', icon: '🎧' },
  { id: 4, name: 'Acessórios', icon: '⌚' },
  { id: 5, name: 'Câmeras', icon: '📷' },
];

function CategoryRow() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Categorias</h2>
      <div className="flex flex-wrap justify-between">
        {categories.map((category) => (
          <div key={category.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4">
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center hover:bg-blue-50 transition duration-300 cursor-pointer">
              <span className="text-4xl mb-2">{category.icon}</span>
              <span className="font-semibold">{category.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryRow;