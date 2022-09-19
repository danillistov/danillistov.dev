<template>
    <Header />
    <div class="main">
        <ThreeBackgroundScene @three-scene-ready="onThreeSceneReady"/>
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component"></component>
            </transition>
        </router-view>
   </div>
   <Preloader :show="getLoadingState" />
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

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

    computed: mapGetters(['getLoadingState']),

    mounted() {
        this.checkCurrentLanguage();
    },

    methods: {
        ...mapActions(['showOverlay']),

        onThreeSceneReady(val) {
            this.showOverlay(val);
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

    .main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100vh - $header-hide);
    }
</style>
