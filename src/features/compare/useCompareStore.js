import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCompareStore = create(
  persist(
    (set, get) => ({
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
    }),
    {
      name: "compare-storage",
    },
  ),
);

export default useCompareStore;
