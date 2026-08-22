import React from 'react';
import { useAppStore } from '../store/appStore';

export default function ProductCard({ product }) {
  const { addToCart, addFavorite } = useAppStore();
  const isFav = useAppStore((state) => state.isFavorite(product.id));

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
      <div className="relative h-48 bg-gray-200 overflow-hidden group">
        <img src={product.image || 'https://via.placeholder.com/300x200'} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition" />
        <button onClick={() => addFavorite(product)} className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
          {isFav ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-sb-text mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-sb-primary">{product.price} ر.س</span>
          {product.stock > 0 && <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">متاح</span>}
        </div>
        <button onClick={() => addToCart(product)} disabled={product.stock === 0} className="w-full bg-sb-primary text-white font-bold py-2 rounded-lg hover:bg-pink-600 transition disabled:bg-gray-400">
          أضف للسلة
        </button>
      </div>
    </div>
  );
}