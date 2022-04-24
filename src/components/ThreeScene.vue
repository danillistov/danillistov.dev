<template>
    <canvas ref="scene"></canvas>
</template>

<script>
import { initSphere } from '@/plugins/threejs/sphere.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default {
    name: 'ThreeScene',

    mounted() {
        this.$nextTick().then(initSphere(this.$refs.scene));
    },
};
</script>

<style lang="scss" scoped>
    canvas {
        position: fixed;
        width: 100%;
        height: 100%;
    }
</style>