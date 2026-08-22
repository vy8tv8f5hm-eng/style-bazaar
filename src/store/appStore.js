import { create } from 'zustand';

export const useAppStore = create((set) => ({
  // User state
  user: null,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  logout: () => set({ user: null, isAuthenticated: false }),

  // Cart state
  cart: [],
  addToCart: (product) => set((state) => ({
    cart: [...state.cart, { ...product, id: Date.now() }]
  })),
  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter(item => item.id !== id)
  })),
  clearCart: () => set({ cart: [] }),
  updateCartItem: (id, updates) => set((state) => ({
    cart: state.cart.map(item => item.id === id ? { ...item, ...updates } : item)
  })),

  // Search and filters
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  filters: {
    category: null,
    priceRange: [0, 10000],
    size: null,
    color: null,
    inStock: true,
  },
  setFilters: (filters) => set({ filters }),

  // UI state
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
  error: null,
  setError: (error) => set({ error }),
  
  // Favorites
  favorites: [],
  addFavorite: (product) => set((state) => ({
    favorites: [...state.favorites, product]
  })),
  removeFavorite: (id) => set((state) => ({
    favorites: state.favorites.filter(item => item.id !== id)
  })),
  isFavorite: (id) => (state) => state.favorites.some(item => item.id === id),
}));
