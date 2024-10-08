import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Smartphone XYZ', price: 15000, rating: 4.5, image: 'https://via.placeholder.com/300x300' },
  { id: 2, name: 'Laptop ABC', price: 45000, rating: 4.8, image: 'https://via.placeholder.com/300x300' },
  { id: 3, name: 'Fones de Ouvido QWE', price: 2500, rating: 4.2, image: 'https://via.placeholder.com/300x300' },
  { id: 4, name: 'Smartwatch 123', price: 8000, rating: 4.0, image: 'https://via.placeholder.com/300x300' },
];

function FeaturedProducts() {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Produtos em Destaque</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;