<template>
    <div class="home">
        <div class="main-title">
            <p class="main-title__text">Hello! My name is Danil&nbsp;Listov.<br> I am Frontend-developer.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
};
</script>

<style lang="scss" scoped>
    .home {
        width: 100%;
        height: 100%;
    }

    .main-title {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        max-width: 70%;
        transform: translate(-50%, -50%);
        font-size: 12rem;
        text-align: center;
    }
</style>
