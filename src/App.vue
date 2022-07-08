<template>
    <Header />
    <div class="main">
        <ThreeBackgroundScene />
        <router-view></router-view>
   </div>
   <Preloader />
</template>

<script>
import ThreeBackgroundScene from '@/components/ThreeScene.vue';
import Header from '@/components/TheHeader.vue';
import Preloader from '@/components/common/ThreeScenePreloader.vue';

export default {
    name: 'App',

    components: {
        ThreeBackgroundScene,
        Header,
        Preloader,
    },
};
</script>

<style lang="scss">
    @import "@/assets/scss/common.scss";
</style>
