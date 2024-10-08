import React, { useState } from 'react';
import { FiShoppingCart, FiHome, FiBox, FiInfo, FiPhone, FiMessageSquare, FiUsers, FiBell } from 'react-icons/fi';
import Cart from './Cart';

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">SkyVenda MZ</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 flex items-center"><FiHome className="mr-1" /></a>
            <a href="#" className="text-gray-600 hover:text-blue-600 flex items-center"><FiBox className="mr-1" /></a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-blue-600 relative">
              <FiBell size={24} />
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                3
              </span>
            </button>
            <button className="text-gray-600 hover:text-blue-600">
              <FiMessageSquare size={24} />
            </button>
            <button className="text-gray-600 hover:text-blue-600">
              <FiUsers size={24} />
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="text-gray-600 hover:text-blue-600 relative"
            >
              <FiShoppingCart size={24} />
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                3
              </span>
            </button>
          </div>
        </div>
      </div>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}

export default Header;