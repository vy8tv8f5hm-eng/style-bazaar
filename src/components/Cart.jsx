import React from 'react';
import { useAppStore } from '../store/appStore';

export default function Cart() {
  const { cart, removeFromCart, updateCartItem, clearCart } = useAppStore();
  const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  if (cart.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <p className="text-2xl text-gray-500 mb-4">السلة فارغة 🛒</p>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-sb-text">سلة التسوق</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg flex gap-4 items-center justify-between shadow-sm">
              <div className="flex-1">
                <h3 className="font-bold text-sb-text mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.price} ر.س</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateCartItem(item.id, { quantity: Math.max(1, (item.quantity || 1) - 1) })} className="px-2 py-1 bg-gray-200 rounded">-</button>
                <span>{item.quantity || 1}</span>
                <button onClick={() => updateCartItem(item.id, { quantity: (item.quantity || 1) + 1 })} className="px-2 py-1 bg-gray-200 rounded">+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">حذف</button>
            </div>
          ))}
        </div>
        <div className="bg-sb-bg p-6 rounded-lg h-fit sticky top-20">
          <h3 className="text-xl font-bold mb-4 text-sb-text">الملخص</h3>
          <div className="space-y-3 mb-6 border-t pt-3">
            <div className="flex justify-between font-bold text-lg">
              <span>الإجمالي:</span>
              <span className="text-sb-primary">{total.toFixed(2)} ر.س</span>
            </div>
          </div>
          <button className="w-full bg-sb-primary text-white font-bold py-3 rounded-lg hover:bg-pink-600 transition mb-3">متابعة الدفع</button>
          <button onClick={clearCart} className="w-full border-2 border-sb-primary text-sb-primary font-bold py-2 rounded-lg hover:bg-sb-bg transition">إفراغ السلة</button>
        </div>
      </div>
    </section>
  );
}