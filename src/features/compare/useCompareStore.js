import { create } from "zustand";

const useCompareStore = create((set, get) => ({
    products: [],
    addToCompare: (product) => {
        const { products } = get();
        
        if (products.some((p) => p.id === product.id)) return;
        
        if (products.length >= 2) {
            set({ products: [products[0], product] });
        } else {
            set({ products: [...products, product] });
        }
    },

    removeFromCompare: (productId) => {
        set({ products: get().products.filter((p) => p.id !== productId) });
    },

    clearCompare: () => set({ products: [] }),
}));

export default useCompareStore;