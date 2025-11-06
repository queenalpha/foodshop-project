<script setup>
import { useMealStore } from "@/stores/meal";

useHead({
   title: "Gallery"
});


const mealStore = useMealStore();

await mealStore.fetchMeals("");
</script>

<template>
   <div>
      <Card :limit="30" />
   </div>
</template>

