<template>
    <div class="home">
        <div class="main-title">
            <TypingTextAnimation
                v-if="false"
                text="Title typing animation!"
                :speed="1"
                :color="$colorTheme.black"
                class="main-title__text"
            />
        </div>
    </div>
</template>

<script>
import TypingTextAnimation from '@/components/common/TypingTextAnimation.vue';

export default {
    name: "Home",

    components: {
        TypingTextAnimation,
    },
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
        transform: translate(-50%, -50%);
    }
</style>
