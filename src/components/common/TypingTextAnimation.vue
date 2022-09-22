<template>
    <div class="typing-text-animation">
        <p ref="text"></p>
    </div>
</template>

<script>
import Typed from 'typed.js';
import { mapGetters } from 'vuex';

export default {
    name: "TypingTextAnimation",

    props: {
        strings: {
            type: Array,
            default: () => [],
        },

        typingDelay: {
            type: Number,
            default: 600,
        },
    },

    data() {
        return {
            typed: null,
        };
    },

    computed: {
        ...mapGetters(['getLoadingState']),

        stringsWithDelay() {
            return this.strings.map((str, i) => {
                if (i !== this.strings.length - 1) {
                    return  `${str} ^${this.typingDelay}`;
                }

                return str;
            });
        },
    },

    watch: {
        getLoadingState() {
            if (!this.getLoadingState) {
                setTimeout(() => {
                    this.initTypingAnimation(this.stringsWithDelay);
                }, 300);
            } else {
                this.typed && this.typed.destroy();
                this.typed = null;
            }
        }
    },

    mounted() {
        if (!this.getLoadingState) {
            this.initTypingAnimation(this.stringsWithDelay);
        }
    },

    methods: {
        initTypingAnimation(strings = []) {
            this.typed = new Typed(this.$refs.text, {
                strings,
                typeSpeed: 30,
                showCursor: false,
            });
        },
    },
};
</script>