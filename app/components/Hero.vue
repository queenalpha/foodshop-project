<template>
    <section class="jumbotron">
        <div class="jumbotron-content">
            <h1>Welcome to Food Shop</h1>
            <p>Find Your Favorite Foods and Enjoy Shopping Experience with Easy and Fast.</p>
            <NuxtLink to="/galeri" class="btn-primary">See Menu</NuxtLink>
        </div>
    </section>
</template>

<style scoped>
.jumbotron {
    width: 100%;
    min-height: 75vh;
    background: url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
    color: #fff;
    position: relative;
}

.jumbotron::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
}

.jumbotron-content {
    position: relative;
    max-width: 650px;
    z-index: 1;
}

.jumbotron h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
}

.jumbotron p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
}

.btn-primary {
    display: inline-block;
    padding: 0.75rem 1.4rem;
    background: #ff7a00;
    color: #fff;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 600;
    transition: 0.3s;
}

.btn-primary:hover {
    background: #e56900;
}

@media (max-width: 768px) {
    .jumbotron h1 {
        font-size: 2rem;
    }

    .jumbotron p {
        font-size: 1rem;
    }
}
</style>
