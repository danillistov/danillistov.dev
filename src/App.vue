<template>
    <Header />
    <div class="main">
        <ThreeBackgroundScene />
        <router-view></router-view>
   </div>
</template>

<script>
import ThreeBackgroundScene from '@/components/ThreeScene.vue';
import Header from '@/components/TheHeader.vue';

export default {
    name: 'App',

    components: {
        ThreeBackgroundScene,
        Header,
    },
};
</script>

<style lang="scss">
    @import "@/assets/scss/common.scss";
</style>
