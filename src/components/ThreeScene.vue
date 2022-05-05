<template>
    <canvas ref="scene"></canvas>
</template>

<script>
import { initSphere } from '@/plugins/threejs/moon';

export default {
    name: 'ThreeScene',

    async mounted() {
        await this.$nextTick();

        initSphere(this.$refs.scene);

        addEventListener('resize', () => {
            initSphere(this.$refs.scene)
        })
    },
};
</script>

<style lang="scss" scoped>
    canvas {
        position: fixed;
        right: 0;
        width: 100%;
        height: 100%;
    }
</style>