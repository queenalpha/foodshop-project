<script setup>
import { useMealStore } from "@/stores/meal";

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

<style scoped>
.home {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
}
</style>
