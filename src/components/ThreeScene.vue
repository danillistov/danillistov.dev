<template>
    <canvas ref="scene"></canvas>
</template>

<script>
import { initSphere } from '@/plugins/threejs/moon';

export default {
    name: 'ThreeScene',

    data() {
        return {
            isReady: false,
        };
    },

    watch: {
        isReady(val) {
            this.$emit('three-scene-ready', val);
        },
    },

    async mounted() {
        await this.$nextTick();

        initSphere(this.$refs.scene, this);

        addEventListener('resize', () => {
            initSphere(this.$refs.scene);
        });
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