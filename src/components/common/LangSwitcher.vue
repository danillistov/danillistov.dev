<template>
    <div class="lang-switcher">
        <UiDropdown
            :options="langs"
            name="lang"
            @selected-value="onLangChange"
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
        onLangChange(lang = 'en') {
            this.$i18n.locale = lang;
        },
    }
};
</script>

<style lang="scss" scoped>

</style>