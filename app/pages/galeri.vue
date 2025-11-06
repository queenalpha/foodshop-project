<script setup>
import { useMealStore } from "@/stores/meal";
import { useHead } from "#imports";

useHead({ title: "Gallery" });

const mealStore = useMealStore();
await mealStore.fetchMeals("");
</script>

<template>
   <div>
      <Card :limit="30" />
   </div>
</template>
