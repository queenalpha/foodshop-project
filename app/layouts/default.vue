<script>
import { useHead } from "#imports";

useHead({
    titleTemplate: "%s - Food Shop", 
    title: "MyApp", 
    meta: [
        { name: "description", content: "Website MyApp" }
    ]
});
</script>
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
}
</style>
