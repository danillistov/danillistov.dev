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

        initSphere(this.$refs.scene, this, this.mq);

        addEventListener('resize', () => {
            this.currentWindowSize = window.screen.width;
            debounce(initSphere(this.$refs.scene, this, this.mq), 250, true);
        });
    },

    computed: {
        mq() {
            return this.currentWindowSize >= 1000
                ? 'desktop' : this.currentWindowSize >= 700 && this.currentWindowSize < 1000
                ? 'tablet' : 'mobile';
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