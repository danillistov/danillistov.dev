<template>
    <div class="information-table">
        <div class="information-table__top">
            <h1 class="information-table__title">
                <TypingTextAnimation
                    :strings="[$t('title')]"
                    :queries="{ showCursor: false }"
                    :type-speed="50"
                    @complete="onTitleTypingComplete"
                />
            </h1>

            <LanguageSelector />
        </div>

        <div
            class="information-table__content"
            :class="{'_visible': showContent}"
            v-html="$t('content')"
        >
        </div>

        <div class="information-table__projects">
            <ProjectsList />
        </div>

        <div class="information-table__contacts" :class="{'_visible': showContent}">
            <ContactsBlock />
        </div>
    </div>
</template>

<script>
import ContactsBlock from '@/components/common/ContactsBlock.vue';
import LanguageSelector from '@/components/common/LanguageSelector.vue';
import TypingTextAnimation from '@/components/common/TypingTextAnimation.vue';
import ProjectsList from '@/components/common/ProjectsList.vue';

export default {
    name: 'InformationTable',

    components: {
        ContactsBlock,
        LanguageSelector,
        TypingTextAnimation,
        ProjectsList,
    },

    data() {
        return {
            showContent: false,
        };
    },

    computed: {
        currentLang() {
            return this.$i18n.locale || 'en';
        },
    },

    watch: {
        currentLang() {
            this.showContent = false;
        },
    },

    methods: {
        onTitleTypingComplete(state) {
            setTimeout(() => {
                this.showContent = state;
            }, 300);
        },
    },
}
</script>

<style lang="scss" scoped>
.information-table {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 127.9rem;
    height: 85vh;
    padding: 2rem;
    background: rgba($color: #F2F2F2, $alpha: .2);
    border-radius: 2rem;
    color: #000;

    @include respond-to(md) {
        height: 100%;
        box-sizing: border-box;
    }

    &__contacts {
        margin-top: auto;
    }

    &__top {
        display: flex;
        justify-content: space-between;
        min-width: 100%;
    }

    &__title {
        margin-bottom: 3rem;
        font-size: 3.6rem;
        font-weight: bold;

        @include respond-to(lg) {
            font-size: 2.4rem;
        }

        @include respond-to(sm) {
            font-size: 1.8rem;
        }
    }

    &__content {
        overflow: hidden;
        max-width: 70%;
        max-height: 60%;
        font-size: 1.8rem;
        opacity: 0;
        transform: translateY(-10px);
        transition: .6s ease;

        & > :deep(p) {
            margin-bottom: 2rem;
        }

        &._visible {
            opacity: 1;
            transform: translateY(0);
        }

        @include respond-to(lg) {
            max-width: 80%;
            max-height: 80%;
            font-size: 1.4rem;
        }

        @include respond-to(sm) {
            max-width: 100%;
            font-size: 1.2rem;
        }
    }

    &__contacts {
        opacity: 0;
        transform: translateY(-10px);
        transition: .6s .3s ease;

        &._visible {
            opacity: 1;
            transform: translateY(0);
        }
    }
}
</style>