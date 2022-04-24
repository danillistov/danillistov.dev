<template>
    <div class="home">
        <ThreeScene />
    </div>
</template>

<script>
import ThreeScene from "@/components/ThreeScene.vue";

export default {
    name: "Home",
    components: { ThreeScene }
};
</script>

<style lang="scss" scoped>
    .home {
        width: 100%;
        height: 100%;
    }
</style>