<template>
    <ul class="main-nav">
        <li
            v-for="item in navs"
            :key="`main-nav-item-${item.id}`"
            class="main-nav__item"
        >
            <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'TheNav',

    data() {
        return {
            navs: [
                { id: 1, name: 'Home', path: '/' },
                { id: 2, name: 'About', path: '/about' },
                { id: 3, name: 'Contacts', path: '/contacts' },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
    .main-nav {
        display: flex;
        margin-left: auto;

        &__item {
            padding: 0 1rem;

            & a {
                font-size: 2rem;
                text-transform: uppercase;
            }
        }
    }
</style>
