<template>
    <ul class="main-nav">
        <li
            v-for="item in navs"
            :key="`main-nav-item-${item.id}`"
            class="main-nav__item"
            :class="{'_active': $route.name === item.name}"
        >
            <router-link :to="item.path">
                <transition name="fade">
                    {{ $t(item.key) }}
                </transition>
            </router-link>
        </li>

        <li class="main-nav__item">
            <LangSwitcher />
        </li>
    </ul>
</template>

<script>
import { mapActions } from 'vuex';

import LangSwitcher from '@/components/common/LangSwitcher.vue';

export default {
    name: 'TheNav',

    components: {
        LangSwitcher,
    },

    data() {
        return {
            navs: [
                { id: 1, key: 'home', name: 'Home', path: '/' },
                { id: 2, key: 'about', name: 'About', path: '/about' },
                { id: 3, key: 'contacts', name: 'Contacts', path: '/contacts' },
            ],
            lastScrollTop: 0,
            nextWheelDelta: 0,
            prevWheelDelta: 0,
        };
    },

    mounted() {
        addEventListener('wheel', (event) => {
            if (event.deltaY < 0) {
                this.prevWheelDelta += event.deltaY;
                if (this.prevWheelDelta <= -350) {
                     this.toPrevRoute();
                     this.prevWheelDelta = 0;
                 }
            } else if (event.deltaY > 0) {
                 this.nextWheelDelta += event.deltaY;
                 if (this.nextWheelDelta >= 350) {
                     this.toNextRoute();
                     this.nextWheelDelta = 0;
                 }
            }
        });
    },

    methods: {
        ...mapActions(['showOverlay']),

        toNextRoute() {
            const currentNav = this.navs.find((n) => n.name === this.$route.name);

            if (!currentNav) {
                return;
            }

            const nextRoute = currentNav.id + 1 > this.navs.length
                ? this.navs[0]
                : this.navs.find((n) => currentNav.id + 1 === n.id);
            const nextRouteName = nextRoute?.name || 'Home';

            this.routerPush(nextRouteName);
        },

        toPrevRoute() {
            const currentNav = this.navs.find((n) => n.name === this.$route.name);

            if (!currentNav) {
                return;
            }

            const prevRoute = currentNav.id - 1 === 0
                ? this.navs[this.navs.length - 1]
                : this.navs.find((n) => currentNav.id - 1 === n.id);
            const prevRouteName = prevRoute?.name || 'Home';

            this.routerPush(prevRouteName);
        },

        routerPush(route) {
            this.$router.push({ name: route });
        },
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
                &:after {
                    content: '';
                    display: block;
                    width: 100%;
                    max-width: 0;
                    height: 2px;
                    background-color: #fff;
                    transition: .3s ease;
                }
            }

            &._active {
                & > a:after {
                    max-width: 100%;
                }
            }
        }
    }
</style>
