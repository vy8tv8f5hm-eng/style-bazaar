import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-sb-text text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">عن StyleBazaar</h3>
            <p className="text-gray-300">تطبيق تسوق موضة سعودي متخصص في أحدث التصاميم.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">المتجر</a></li>
              <li><a href="#" className="hover:text-white">عن الموقع</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">التواصل</h3>
            <p className="text-gray-300">info@stylebazaar.sa</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; 2024 StyleBazaar. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}