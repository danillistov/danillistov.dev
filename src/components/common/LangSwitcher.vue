<template>
    <div class="lang-switcher">
        <UiDropdown
            :options="langs"
            name="lang"
            @selected-value="onLanguageChange"
        />
    </div>
</template>

<script>
import UiDropdown from '@/components/ui/UiDropdown.vue';

export default {
    name: "LangSwitcher",

    components: {
        UiDropdown,
    },

    computed: {
        langs() {
            return [
                { label: 'EN', value: 'en', active: this.$i18n.locale === 'en' },
                { label: 'RU', value: 'ru', active: this.$i18n.locale === 'ru' },
                { label: 'JP', value: 'jp', active: this.$i18n.locale === 'jp' },
            ];
        },
    },

    methods: {
        onLanguageChange(lang = 'en') {
            this.$i18n.locale = lang;
            localStorage.setItem('lang', this.$i18n.locale);
        },
    }
};
</script>

<style lang="scss" scoped>

</style>