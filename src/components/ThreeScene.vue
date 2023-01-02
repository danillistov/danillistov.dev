<template>
    <canvas ref="scene"></canvas>
</template>

<script>
import { initSphere } from '@/plugins/threejs/moon';
import { debounce } from '@/helpers';

export default {
    name: 'ThreeScene',

    data() {
        return {
            isNotReady: true,
            currentWindowSize: null,
        };
    },

    watch: {
        isNotReady(val) {
            this.$emit('three-scene-ready', val);
        },
    },

    created() {
        this.currentWindowSize = window.screen.width;
    },

    async mounted() {
        await this.$nextTick();

        initSphere(this.$refs.scene, this.changeThreeSceneState, this.mq);

        setTimeout(() => {
            if (this.isNotReady) {
                this.handleThreeSceneError();
            }
        }, 10000);

        addEventListener('resize', () => {
            this.currentWindowSize = window.screen.width || 1000;
            debounce(
                initSphere(this.$refs.scene, this.changeThreeSceneState, this.mq),
                250,
                true
            );
        });
    },

    computed: {
        mq() {
            return this.currentWindowSize >= 1000
                ? 'desktop' : this.currentWindowSize >= 700 && this.currentWindowSize < 1000
                ? 'tablet' : 'mobile';
        },
    },

    methods: {
        handleThreeSceneError() {
            alert('Something went wrong. Please, reload the page.');
            throw new Error('[handleThreeSceneError]: Something went wrong.');
        },

        changeThreeSceneState(val) {
            this.isNotReady = val;
        },
    },
};
</script>

<style lang="scss" scoped>
    canvas {
        position: fixed;
        top: 0;
        right: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
    }
</style>