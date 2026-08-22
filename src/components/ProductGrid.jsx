import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, isLoading }) {
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (<div key={i} className="bg-gray-200 h-64 rounded-lg animate-pulse"></div>))}
        </div>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-sb-text">المنتجات المميزة</h2>
      {products.length === 0 ? (
        <div className="text-center py-12"><p className="text-gray-500 text-lg">لا توجد منتجات متاحة</p></div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (<ProductCard key={product.id} product={product} />))}
        </div>
      )}
    </section>
  );
}