<script setup>
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();

const checkout = () => {
    alert("Pesanan akan diproses 🚀");
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

        <!-- Tombol Checkout -->
        <div class="checkout-container">
            <button class="checkout-btn" @click="checkout">Checkout</button>
        </div>
    </div>
</template>

<style scoped>
.empty-cart {
    text-align: center;
    padding: 40px 0;
    font-size: 18px;
    font-weight: 500;
    opacity: 0.7;
}

.cart-list {
    list-style: none;
    margin: 10px;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.cart-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 10px;
}

.cart-item img {
    width: 70px;
    height: 70px;
    border-radius: 8px;
    object-fit: cover;
}

.meal-info h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
}

/* Container Tombol Checkout di Tengah */
.checkout-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

/* Tombol Checkout */
.checkout-btn {
    width: 100%;
    margin: 10px;
    padding: 14px;
    background: #fd8d0d;
    color: white;
    font-weight: 600;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
}

.checkout-btn:hover {
    background: #e47e0b;
}
</style>
