<template>
    <header class="header">
        <Nav />
    </header>
</template>

<script>
import Nav from '@/components/TheNav.vue';

export default {
    name: 'TheHeader',

    components: {
        Nav,
    },
};
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        padding: 2.4rem;
    }
</style>
