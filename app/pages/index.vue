<script setup>
import { useMealStore } from "@/stores/meal";

useHead({
    title: "Home" 
});

const mealStore = useMealStore();

await mealStore.fetchMeals("");
</script>

<template>
    <Hero/>
    <div class="home">
        <Search/>
        <div class="food-container">
            <Card :limit="8" />
        </div>
    </div>
</template>
