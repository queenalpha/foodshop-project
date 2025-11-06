<script setup>
import { ref } from 'vue'
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
const isOpen = ref(false)
</script>


<template>
    <nav class="navbar">
        <div class="navbar-container">
            <NuxtLink to="/" class="navbar-logo">Food Shop</NuxtLink>

            <button class="navbar-toggle" @click="isOpen = !isOpen">
                <span></span><span></span><span></span>
            </button>

            <ul :class="['navbar-menu', isOpen ? 'active' : '']">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/galeri">Gallery</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/cart">Cart ({{ cartStore.cartCount }})</NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>


<style scoped>
.navbar {
    background: #ffffff;
    border-bottom: 1px solid #eee;
    position: sticky;
    top: 0;
    z-index: 999;
}

.navbar-container {
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
}

.navbar-logo {
    font-weight: 700;
    font-size: 1.25rem;
    text-decoration: none;
    color: #000;
}

.navbar-menu {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    transition: 0.3s ease-in-out;
}

.navbar-menu li a {
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem;
    color: #000;
    transition: .3s;
}

.navbar-menu li a:hover {
    color: #007bff;
}

.navbar-toggle {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
}

.navbar-toggle span {
    width: 25px;
    height: 3px;
    background: #333;
    transition: 0.3s;
}

@media (max-width: 768px) {
    .navbar-toggle {
        display: flex;
    }

    .navbar-menu {
        position: absolute;
        top: 65px;
        left: 0;
        width: 100%;
        flex-direction: column;
        background: #fff;
        padding: 1rem 0;
        gap: 1rem;
        transform: translateY(-200%);
        opacity: 0;
        pointer-events: none;
    }

    .navbar-menu.active {
        transform: translateY(0);
        opacity: 1;
        pointer-events: auto;
    }
}
</style>
