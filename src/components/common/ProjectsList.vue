<template>
    <div class="projects">
        <div ref="text" class="projects__text"></div>
    </div>
</template>

<script>
import TextScramble from '@/plugins/scramble/scrambleText.js';

export default {
    name: 'ProjectsList',

    async mounted() {
        await this.$nextTick();

        const element = this.$refs.text;
        const ts = new TextScramble(element);

        this.startAnimation(ts);
    },

    methods: {
        startAnimation(ts) {
            const phrases = [
                'Neo,',
                'sooner or later',
                'you\'re going to realize',
                'just as I did',
                'that there\'s a difference',
                'between knowing the path',
                'and walking the path'
            ];

            let counter = 0;

            const next = () => {
                ts.setText(phrases[counter]).then(() => {
                    setTimeout(next, 800);
                });

                counter = (counter + 1) % phrases.length;
            }

            next();
        },
    }
}
</script>
