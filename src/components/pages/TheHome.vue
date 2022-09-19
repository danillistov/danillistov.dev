<template>
    <div class="home">
        <div class="main-title">
            <p ref="text" class="main-title__text"></p>
        </div>
    </div>
</template>

<script>
import Typed from 'typed.js';
import { mapGetters } from 'vuex';

export default {
    name: "Home",

    data() {
        return {
            typed: null,
            stringChangeDelay: 600,
        };
    },

    computed: {
        ...mapGetters(['getLoadingState']),
    },

    watch: {
        getLoadingState() {
            if (!this.getLoadingState) {
                setTimeout(() => {
                    this.initTypingAnimation();
                }, 300);
            } else {
                this.typed && this.typed.destroy();
                this.typed = null;
            }
        }
    },

    mounted() {
        if (!this.getLoadingState) {
            this.initTypingAnimation();
        }
    },

    methods: {
        initTypingAnimation() {
            this.typed = new Typed(this.$refs.text, {
                strings: [`Hello! My name is Danil&nbsp;Listov.<br> ^${this.stringChangeDelay}`, 'I am Frontend-developer.'],
                typeSpeed: 30,
                showCursor: false,
            });
        },
    }
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
