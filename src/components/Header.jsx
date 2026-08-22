import React from 'react';
import { useAppStore } from '../store/appStore';

export default function Header({ onNavigate, currentPage }) {
  const cart = useAppStore((state) => state.cart);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
          <span className="text-2xl">👗</span>
          <h1 className="text-xl font-bold text-sb-primary">StyleBazaar</h1>
        </div>

        <nav className="flex gap-6 items-center">
          <button onClick={() => onNavigate('home')} className={currentPage === 'home' ? 'text-sb-primary font-medium' : 'text-gray-600 hover:text-sb-primary'}>
            المتجر
          </button>
          <button onClick={() => onNavigate('cart')} className={currentPage === 'cart' ? 'text-sb-primary font-medium' : 'text-gray-600 hover:text-sb-primary'}>
            🛒 السلة
            {cart.length > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{cart.length}</span>}
          </button>
        </nav>
      </div>
    </header>
  );
}