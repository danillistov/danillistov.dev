<template>
    <div class="typing-text-animation">
        <div
            v-if="text"
            :style="queries"
            class="typing-text-animation__text"
        >
            {{ text }}
        </div>
    </div>
</template>

<script>
export default {
    name: "TypingTextAnimation",

    props: {
        text: {
            type: String,
            default: '',
        },

        speed: {
            type: Number,
            default: 2,
        },

        color: {
            type: Number,
            default: '#000000',
        },
    },

    computed: {
        textLength() {
            return this.text && this.text.length;
        },

        queries() {
            return `animation:
                typing ${this.speed}s steps(${this.textLength}),
                blink .5s step-end infinite alternate;
                color: ${this.color};
                width: ${this.textLength + 0.5}ch`;
        },
    },
};
</script>

<style lang="scss">
    .typing-text-animation {

        &__text {
            white-space: nowrap;
            overflow: hidden;
            border-right: 3px solid;
            font-family: monospace;
            font-size: 2em;
        }
    }

    @keyframes typing {
        from {
            width: 0;
        }
    }

    @keyframes blink {
        50% {
            border-color: transparent;
        }
    }
</style>