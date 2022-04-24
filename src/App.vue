<template>
    <div class="main">
        <router-view></router-view>
   </div>
</template>

<script>
export default {
    name: 'App',
};
</script>

<style lang="scss">
    @import "@/assets/scss/common.scss";
    .main {
        width: 100%;
        height: 100vh;
        background: black;
    }
</style>
