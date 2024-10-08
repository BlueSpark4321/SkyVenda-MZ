import React from 'react';
import { FiStar, FiShoppingCart } from 'react-icons/fi';
import toast from 'react-hot-toast';

function formatPrice(price) {
  return new Intl.NumberFormat('pt-MZ', { style: 'currency', currency: 'MZN' }).format(price);
}

function ProductCard({ product }) {
  const handleAddToCart = () => {
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  return (
    <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mb-4 font-bold">{formatPrice(product.price)}</p>
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400 mr-2">
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} className={i < Math.floor(product.rating) ? 'fill-current' : ''} />
            ))}
          </div>
          <span className="text-gray-600">({product.rating})</span>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          <FiShoppingCart className="mr-2" />
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}

export default ProductCard;