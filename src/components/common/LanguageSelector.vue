<template>
    <div class="language-selector">
        <div
            class="language-selector__selected"
            :class="{'_active': isOpened}"
            @click="isOpened = !isOpened"
        >
            {{ currentLang }}
        </div>

        <ul class="language-selector__list" :class="{'_open': isOpened}">
            <li
                v-for="(lang, i) in filteredLangs"
                :key="`language-${i}`"
                @click="onLanguageChange(lang.value)"
            >
                {{ lang.label }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "LanguageSelector",

    data() {
        return {
            currentLang: 'en',
            isOpened: false,
        };
    },

    computed: {
        langs() {
            return [
                { label: 'EN', value: 'en', active: this.$i18n.locale === 'en' },
                { label: 'RU', value: 'ru', active: this.$i18n.locale === 'ru' },
                // { label: 'JP', value: 'jp', active: this.$i18n.locale === 'jp' },
            ];
        },

        filteredLangs() {
            return this.langs.filter(({ value: lang }) => lang !== this.currentLang);
        },
    },

    async mounted() {
        await this.$nextTick();
        this.currentLang = this.$i18n.locale;
    },

    methods: {
        ...mapActions(['showOverlay']),

        onLanguageChange(lang = 'en') {
            this.showOverlay(true);

            setTimeout(() => {
                this.$i18n.locale = lang;
                this.currentLang = this.$i18n.locale;
                localStorage.setItem('lang', this.$i18n.locale);
                this.isOpened = false;
                this.showOverlay(false);
            }, 1000);
        },
    },
}
</script>

<style lang="scss" scoped>
    .language-selector {
        position: relative;

        &__selected {
            text-transform: uppercase;
            cursor: pointer;

            &._active {
                &:after {
                    max-width: 100%;
                }
            }

            &::after {
                content: "";
                display: block;
                width: 100%;
                max-width: 0;
                height: 1px;
                background-color: rgba($color: #000000, $alpha: .5);
                transition: .3s ease;
            }
        }

        &__list {
            position: absolute;
            visibility: hidden;
            opacity: 0;
            transition: .3s ease;
            transform: translateY(-10px);

            & li {
                cursor: pointer;
                transition: .2 ease-in-out;

                &:hover {
                    opacity: .5;
                }
            }

            &._open {
                visibility: visible;
                opacity: 1;
                transform: translate(0);
            }
        }
    }
</style>