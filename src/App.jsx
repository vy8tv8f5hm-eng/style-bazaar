import React, { useEffect, useState } from 'react';
import { useAppStore } from './store/appStore';
import { supabase } from './lib/supabase';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setIsLoading: setAppLoading, setError } = useAppStore();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setAppLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .limit(20);

      if (error) throw error;
      setProducts(data || []);
    } catch (err) {
      setError(err.message);
      console.error('Error loading products:', err);
    } finally {
      setAppLoading(false);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-sb-bg flex flex-col">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />

      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <Hero />
            <ProductGrid products={products} isLoading={isLoading} />
          </>
        )}
        {currentPage === 'cart' && <Cart />}
      </main>

      <Footer />
    </div>
  );
}
