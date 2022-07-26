<template>
    <div class="ui-dropdown">
        <div
            class="ui-dropdown__current"
            :class="{'_active': isOpened}"
            @click="isOpened = !isOpened"
        >
            {{ currentLang }}
        </div>
        <ul class="ui-dropdown__list" :class="{'_open': isOpened}">
            <li
                v-for="(option, i) in langs"
                :key="`dropdown-option-${i}`"
                class="ui-dropdown__item"
                @click="onSelectLang(option.value)"
            >
                <svg v-if="option.value === 'en'" viewBox="0 0 53 45" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26.3191 0.110588C35.7257 -0.403561 47.2899 0.693476 51.6119 7.29324C55.6992 13.5346 48.8841 23.355 45.9999 30C43.7876 35.0969 42.5634 37.5556 37.0796 40.7747C30.4522 44.6651 21.284 46.4143 13.7957 43.6578C6.23727 40.8754 3.08986 34.091 1.42977 27.6517C-0.169099 21.4499 0.416945 14.9927 5.07638 9.83679C10.0731 4.30771 17.7224 0.580469 26.3191 0.110588Z" fill="white" fill-opacity="0.4"/>
                </svg>

                <svg v-if="option.value === 'ru'" viewBox="0 0 53 52" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.9213 0.991851C32.251 -0.215515 40.6015 -1.21396 46.1936 3.65464C51.9661 8.6803 53.6914 17.3216 52.3002 24.8285C51.0803 31.4113 44.3309 34.6818 39.568 39.4074C34.8192 44.1191 31.6219 51.7492 24.9213 51.9934C18.159 52.2398 13.6473 45.5583 9.16156 40.5153C5.05889 35.903 0.652464 30.988 0.757961 24.8285C0.862259 18.7391 5.34405 13.9547 9.68992 9.66763C14.0092 5.40678 18.9218 1.9801 24.9213 0.991851Z" fill="white" fill-opacity="0.4"/>
                </svg>

                <svg v-if="option.value === 'jp'" viewBox="0 0 54 47" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.9796 0.058011C30.0267 -0.290557 35.9892 0.90289 40.8958 4.42074C46.8057 8.65801 52.7653 13.9787 53.4321 21.1745C54.1378 28.7906 50.1164 36.2667 44.3144 41.3139C38.8275 46.0869 31.237 47.6001 23.9796 46.795C17.4782 46.0737 12.3304 41.8746 7.74163 37.2565C3.20288 32.6889 -0.232098 25.404 0.0122681 19C0.251749 12.724 4.06265 10.2961 8.92426 6.26366C13.2565 2.67034 18.3384 0.383187 23.9796 0.058011Z" fill="white" fill-opacity="0.4"/>
                </svg>

                <span class="ui-dropdown__label">{{ option.label }}</span>
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
            isOpened: false,
        };
    },

    computed: {
        langs() {
            return this.options.filter((lang) => lang.value !== this.currentLang);
        },
    },

    async mounted() {
        await this.$nextTick();
        this.currentLang = this.$i18n.locale;
    },

    methods: {
        onSelectLang(lang) {
            this.currentLang = lang;
            this.$emit('selected-value', this.currentLang);
            this.isOpened = false;
        },
    },
};
</script>

<style lang="scss" scoped>
    .ui-dropdown {
        position: relative;

        &__current {
            align-items: center;
            color: #fff;
            border-radius: .6rem;
            font-size: 2rem;
            cursor: pointer;
            text-transform: uppercase;
            text-align: center;

            &._active {
                &:after {
                    max-width: 100%;
                }
            }

            &::after {
                content: "";
                display: block;
                width: 100%;
                max-width: 0;
                height: 2px;
                background-color: #fff;
                transition: .3s ease;
            }
        }

        &__item {
            position: relative;
            display: flex;
            margin-bottom: 1rem;
            cursor: pointer;

            &:last-child {
                margin-bottom: 0;
            }

            & > svg {
                flex: 1;
                width: 100%;
                min-width: 5rem;
            }

            &:hover > .ui-dropdown__label {
                opacity: 1;
                color: white;
            }
        }

        &__label {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #000;
            opacity: .4;
            transition: .1s ease;
        }

        &__list {
            position: absolute;
            left: -50%;
            visibility: hidden;
            opacity: 0;
            margin-top: 1.5rem;
            transition: .3s ease;

            &._open {
                visibility: visible;
                opacity: 1;
            }
        }
    }
</style>