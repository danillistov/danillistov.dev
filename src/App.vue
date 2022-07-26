<template>
    <Header />
    <div class="main">
        <ThreeBackgroundScene @three-scene-ready="onThreeSceneReady"/>
        <router-view></router-view>
   </div>
   <Preloader :show="!isThreeSceneReady" />
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

    data() {
        return {
            isThreeSceneReady: false,
        };
    },

    mounted() {
        this.checkCurrentLanguage();
    },

    methods: {
        onThreeSceneReady(val) {
            this.isThreeSceneReady = val;
        },

        checkCurrentLanguage() {
            const supportedLangs = ['en', 'ru', 'jp'];
            const lang = localStorage.getItem('lang');

            if (!lang || !supportedLangs.includes(lang)) return;

            this.$i18n.locale = lang;
        },
    },
};
</script>

<style lang="scss">
    @import "@/assets/scss/common.scss";
</style>
