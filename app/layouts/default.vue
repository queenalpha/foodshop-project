<template>
    <div class="layout-default">
        <Navbar />

        <main>
            <slot />
        </main>

        <Footer />
    </div>
</template>

<style>
.layout-default {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex: 1;
    /* Agar footer tetap di bawah */
}
</style>
