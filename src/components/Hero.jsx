import React from 'react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-sb-primary to-pink-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">أناقتك بأطراف أصابعك ✨</h2>
        <p className="text-lg mb-8 opacity-90">تسوقي أحدث تصاميم الموضة السعودية</p>
        <button className="bg-white text-sb-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition">ابدأ التسوق</button>
      </div>
    </section>
  );
}