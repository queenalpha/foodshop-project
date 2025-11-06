import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
    state: () => ({
        items: [],
    }),

    getters: {
        cartCount: (state) => state.items.reduce((acc, item) => acc + item.qty, 0), 
    },

    actions: {
        addToCart(meal) {
            const existingItem = this.items.find((item) => item.idMeal === meal.idMeal);

            if (existingItem) {
                existingItem.qty++; 
            } else {
                this.items.push({ ...meal, qty: 1 });
            }
        },
    },
});
