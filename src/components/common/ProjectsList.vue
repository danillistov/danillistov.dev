<template>
    <div class="projects">
        <div class="projects__label">Projects:</div>
        <div ref="text" class="projects__text"></div>
    </div>
</template>

<script>
import TextScramble from '@/plugins/scramble/scrambleText.js';

export default {
    name: 'ProjectsList',

    data() {
        return {
            phrases: [
                'Neo,',
                'sooner or later',
                'you\'re going to realize',
                'just as I did',
                'that there\'s a difference',
                'between knowing the path',
                'and walking the path'
            ],
        };
    },

    async mounted() {
        await this.$nextTick();

        const element = this.$refs.text;
        const ts = new TextScramble(element, this.phrases);

        ts.start();
    },

    // methods: {
    //     startAnimation(ts) {


    //         ts.
    //     },
    // }
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