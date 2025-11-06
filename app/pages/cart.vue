<script setup>
import { useCartStore } from "@/stores/cart";

useHead({
    title: "Your Cart"
});

const cartStore = useCartStore();

const checkout = () => {
    alert("Your order has been placed successfully!");
    cartStore.items = [];
};
</script>

<template>
    <div v-if="cartStore.items.length === 0" class="empty-cart">
        <h2>Cart is empty. Please add some meals!</h2>
    </div>

    <div v-else>
        <ul class="cart-list">
            <li v-for="(item, index) in cartStore.items" :key="index" class="cart-item">
                <img :src="item.strMealThumb" alt="Meal Image" />
                <div class="meal-info">
                    <p class="meal-text">
                        {{ item.strMeal }} – <span class="qty">{{ item.qty }}x</span>
                    </p>
                </div>
            </li>
        </ul>

        <div class="checkout-container">
            <button class="checkout-btn" @click="checkout">Checkout</button>
        </div>
    </div>
</template>

