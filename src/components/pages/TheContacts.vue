<template>
    <div class="contacts">
        <Transition name="fade">
            <SocialIcons
                v-if="showSocialIcons"
            />
        </Transition>
    </div>
</template>

<script>
import SocialIcons from '@/components/common/SocialIcons.vue';

export default {
    name: 'Contacts',

    components: {
        SocialIcons,
    },

    data() {
        return {
            showSocialIcons: false,
        };
    },

    async mounted() {
        await this.$nextTick();

        this.showSocialIcons = true;
    },
};
</script>