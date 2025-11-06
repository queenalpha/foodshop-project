import { defineStore } from "pinia";

export const useMealStore = defineStore("mealStore", {
    state: () => ({
        meals: [],
        loading: false,
        error: null,
        searchQuery: "",
    }),

    actions: {
        async fetchMeals(query = "") {
            this.loading = true;
            this.error = null;
            this.searchQuery = query;

            try {
                const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
                const data = await $fetch(url); 
                this.meals = data?.meals || [];
            } catch (err) {
                this.error = err;
            } finally {
                this.loading = false;
            }
        },
    },
});