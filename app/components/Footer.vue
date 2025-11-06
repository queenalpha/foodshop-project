<template>
    <footer class="footer">
        <div class="footer-container">
            <p>Frontend Test Candidate Fahri © {{ year }} FoodShop. All Rights Reserved.</p>
        </div>
    </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
    background: #f5f5f5;
    padding: 1rem 0;
    margin-top: 2rem;
    border-top: 1px solid #ddd;

}

.footer-container {
    max-width: 1200px;
    margin: auto;
    padding: 0 1rem;
    text-align: center;
    color: #555;
    font-size: 0.95rem;
}
</style>
