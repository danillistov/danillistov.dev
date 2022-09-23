<template>
    <div class="home">
        <div class="main-title">
            <TypingText
                :strings="mainText"
                :queries="{ showCursor: false }"
                :typeSpeed="currentLang === 'jp' ? 60 : 30"
            />
        </div>
    </div>
</template>

<script>
import TypingText from '@/components/common/TypingTextAnimation.vue';

export default {
    name: "Home",

    components: {
        TypingText,
    },

    computed: {
        mainText() {
            return [this.$t('main-text-first'), this.$t('main-text-second')];
        },

        currentLang() {
            return this.$i18n.locale || 'en';
        },
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
        width: 100%;
        max-width: 80%;
        transform: translate(-50%, -50%);
        font-size: 4rem;
        text-align: center;
        color: $base-black;
    }
</style>
