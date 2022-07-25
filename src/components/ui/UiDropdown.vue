<template>
    <div class="ui-dropdown">
        <button class="ui-dropdown__button">{{ currentLang }}</button>
        <ul class="ui-dropdown__list">
            <li
                v-for="(option, i) in langs"
                :key="`dropdown-option-${i}`"
                class="ui-dropdown__item"
                @click="onSelectLang(option.value)"
            >
                {{ option.label }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'UiDropdown',

    props: {
        options: {
            type: Array,
            default: () => [],
        },

        name: {
            type: String,
            default: '',
        },
    },

    data() {
        return {
            currentLang: 'en',
        };
    },

    computed: {
        langs() {
            return this.options.filter((lang) => lang.value !== this.currentLang);
        },
    },

    methods: {
        onSelectLang(lang) {
            this.currentLang = lang;
            this.$emit('selected-value', this.currentLang);
        },
    },
};
</script>

<style lang="scss" scoped>
    .ui-dropdown {
        &__button {
            min-width: 5rem;
            padding: .6rem 1.6rem;
            background: #fff;
            color: #000;
            border-radius: .6rem;
        }
    }
</style>