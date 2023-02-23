<template>
    <div class="main">
        <ThreeBackgroundScene @three-scene-ready="onThreeSceneReady"/>

        <router-view />
   </div>
   <Preloader :show="getLoadingState" />
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import ThreeBackgroundScene from '@/components/ThreeScene.vue';
import Preloader from '@/components/common/ThreeScenePreloader.vue';
import InformationTable from '@/components/common/InformationTable.vue';

export default {
    name: 'App',

    components: {
        ThreeBackgroundScene,
        Preloader,
        InformationTable,
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
    .main {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 1920px;
        height: 100vh;
        margin: 0 auto;

        @include respond-to(md) {
            padding: 2rem;
        }

        @include respond-to(sm) {
            align-items: flex-start;
            padding: 1.2rem;
        }
    }
</style>
