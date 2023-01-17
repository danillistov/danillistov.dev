<template>
    <div
        class="social-icons"
        :class="{'_active': isShowen}"
    >
        <a
            v-for="(icon, i) in icons"
            :key="`social-icon-${i}`"
            :href="icon.link"
            target="_blank"
            class="social-icons__wrap"
            :style="`transition-delay: .${i + 2}s`"
        >
            <img :src="icon.path" :alt="icon.name" class="social-icons__icon">
        </a>
    </div>
</template>

<script>
import github from '@/static/icons/github.svg';
import facebook from '@/static/icons/facebook.svg';
import instagram from '@/static/icons/instagram.svg';
import linkedin from '@/static/icons/linkedin.svg';
import twitter from '@/static/icons/twitter.svg';

export default {
    name: 'SocialIcons',

    data() {
        return {
            icons: [
                { name: 'github', path: github, link: 'https://github.com/danillistov' },
                { name: 'linkedin', path: linkedin, link: 'https://www.linkedin.com/in/danillistov/' },
                { name: 'facebook', path: facebook, link: 'https://www.facebook.com/profile.php?id=100055651503831' },
                { name: 'twitter', path: twitter, link: 'https://twitter.com/danialfolige' },
                { name: 'instagram', path: instagram, link: 'https://www.instagram.com/danillistov/' },
            ],
            isShowen: false,
        };
    },

    mounted() {
        setTimeout(() => {
            this.isShowen = true;
        }, 0);
    }
};
</script>

<style lang="scss" scoped>
    .social-icons {
        display: flex;

        &._active > .social-icons__wrap {
            opacity: 1;
            transform: translateY(0);
            transition-duration: .3s;
            transition-property: opacity, transform;
            transition-timing-function: ease;
        }

        &__wrap {
            opacity: 0;
            transform: translateY(-15px);
        }

        &__wrap:hover > .social-icons__icon {
            transform: translateY(-10px);
        }

        &__icon {
            width: 3rem;
            height: 3rem;
            padding: 1.5rem;
            transition: .2s ease-in-out;
            cursor: pointer;

            @include respond-to(sm) {
                width: 2rem;
                height: 2rem;
            }
        }
    }
</style>