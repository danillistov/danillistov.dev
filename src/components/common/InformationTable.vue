<template>
    <div class="information-table">
        <div class="information-table__top">
            <h1 class="information-table__title">Hello, Danil!</h1>

            <LanguageSelector />
        </div>
        <div class="information-table__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid magni aut recusandae dolores aliquam iure repellat voluptas consequuntur natus molestiae impedit nihil earum est, nostrum perferendis ab! Quisquam, nemo quae?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid magni aut recusandae dolores aliquam iure repellat voluptas consequuntur natus molestiae impedit nihil earum est, nostrum perferendis ab! Quisquam, nemo quae?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid magni aut recusandae dolores aliquam iure repellat voluptas consequuntur natus molestiae impedit nihil earum est, nostrum perferendis ab! Quisquam, nemo quae?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid magni aut recusandae dolores aliquam iure repellat voluptas consequuntur natus molestiae impedit nihil earum est, nostrum perferendis ab! Quisquam, nemo quae?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid magni aut recusandae dolores aliquam iure repellat voluptas consequuntur natus molestiae impedit nihil earum est, nostrum perferendis ab! Quisquam, nemo quae?
        </div>

        <div class="information-table__contacts">
            <SocialIcons />
        </div>
    </div>
</template>

<script>
import SocialIcons from '@/components/common/SocialIcons.vue';
import LanguageSelector from '@/components/common/LanguageSelector.vue';
export default {
    name: 'InformationTable',

    components: {
        SocialIcons,
        LanguageSelector,
    },
}
</script>

<style lang="scss" scoped>
.information-table {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 80vw;
    height: 80vh;
    padding: 2rem;
    background: rgba($color: #F2F2F2, $alpha: .2);
    border-radius: 2rem;
    color: #000;

    &__contacts {
        margin-top: auto;
    }

    &__top {
        display: flex;
        justify-content: space-between;
        min-width: 100%;
    }

    &__title {
        font-size: 3.6rem;
        margin-bottom: 1rem;
    }

    &__content {
        font-size: 1.8rem;
        max-width: 70%;
    }
}
</style>