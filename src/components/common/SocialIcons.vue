<template>
    <div class="social-icons">
        <a
            v-for="(icon, i) in icons"
            :key="`social-icon-${i}`"
            :href="icon.link"
            target="_blank"
            class="social-icons__wrap"
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
        };
    },
};
</script>

<style lang="scss" scoped>
    .social-icons {
        position: absolute;
        top: 50%;
        left: 50%;
        display: flex;
        transform: translate(-50%, -50%);

        &__wrap:hover > .social-icons__icon {
            transform: translateY(-10px);
        }

        &__icon {
            width: 4rem;
            height: 4rem;
            padding: 1.5rem;
            transition: .2s ease-in-out;
            cursor: pointer;
        }
    }
</style>