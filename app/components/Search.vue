<script setup>
import { ref } from "vue";
import { useMealStore } from "@/stores/meal";

const mealStore = useMealStore();
const keyword = ref("");

const search = () => {
    mealStore.fetchMeals(keyword.value);
};
</script>

<template>
    <div class="search-container">
        <input v-model="keyword" @keyup.enter="search" type="text" placeholder="Search Foods..." class="search-input" />
        <button @click="search" class="search-btn">Search</button>
    </div>
</template>

<style scoped>
.search-container {
    display: flex;
    gap: 10px;
    margin: 10px 20px;
}

.search-input {
    flex: 1;
    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid #ddd;
    font-size: 1rem;
}

.search-btn {
    background: #ff6b00;
    border: none;
    color: #fff;
    padding: 8px 14px;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.2s;
}

.search-btn:hover {
    background: #e65a00;
}
</style>
