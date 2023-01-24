<template>
    <div class="projects">
        <div class="projects__label">Projects:</div>
        <a ref="text" href="/" target="_blank" class="projects__text"></a>
    </div>
</template>

<script>
import TextScramble from '@/plugins/scramble/scrambleText.js';

export default {
    name: 'ProjectsList',

    data() {
        return {
            phrases: [
                'https://new.krost.ru',
                'https://samolet.ru',
                'https://glorax.com',
            ],
        };
    },

    async mounted() {
        await this.$nextTick();

        const element = this.$refs.text;
        const ts = new TextScramble(element, this.phrases);

        ts.start();
    },
}
</script>

<style lang="scss" scoped>
    .projects {
        display: flex;

        &__label {
            font-weight: bold;
        }

        &__text {
            margin-left: 1rem;
        }
    }
</style>