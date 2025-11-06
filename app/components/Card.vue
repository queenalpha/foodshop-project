<script setup>
import { useMealStore } from "@/stores/meal";
import { useCartStore } from "@/stores/cart";

const props = defineProps({ limit: { type: Number, default: null } });
const mealStore = useMealStore();
const cartStore = useCartStore();

const add = (meal) => cartStore.addToCart(meal);
</script>

<template>
    <div v-if="mealStore.loading">Loading...</div>
    <div v-else-if="mealStore.error">Error: {{ mealStore.error.message }}</div>
    <div v-else class="food-grid">
        <div v-for="meal in (props.limit ? mealStore.meals.slice(0, props.limit) : mealStore.meals)" :key="meal.idMeal"
            class="food-card">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="food-image" />
            <div class="food-info">
                <h3 class="food-title">{{ meal.strMeal }}</h3>
                <div class="food-footer">
                    <button @click="add(meal)" class="btn-add">Tambah</button>
                </div>
            </div>
        </div>
    </div>
</template>
