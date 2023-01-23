<template>
    <div class="contacts">
        <div class="contacts__label">{{ $t('contact') }}:</div>
        <SocialIcons />
    </div>
</template>

<script>
import SocialIcons from '@/components/common/SocialIcons.vue';

export default {
    name: 'ContactsBlock',

    components: {
        SocialIcons,
    },
}
</script>

<style lang="scss" scoped>
    .contacts {
        &__label {
            font-style: italic;
        }
    }
</style>