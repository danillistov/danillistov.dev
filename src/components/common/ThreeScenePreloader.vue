<template>
    <div id="scene-preloader" :class="{'_hidden': !show}">
        <div class="svg-wrapper">
                <svg class="moon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111.77 111.77">
                <circle cx="55.89" cy="55.89" r="55.64" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width=".5" stroke-dasharray="4"/>
                <circle cx="55.89" cy="55.89" r="43.65" fill="#0FC2C0"/>
                <path d="M73 91.22a52.22 52.22 0 0 1-51.1-62.71 43.64 43.64 0 0 0 60.8 61.8 52.45 52.45 0 0 1-9.7.91z" fill="#023535" fill-rule="evenodd"/>
                <circle cx="49.01" cy="38.35" r="6.88" fill="#008F8C"/>
                <path d="M45.79 32.82a10.1 10.1 0 0 1 9.78 7.61 6.87 6.87 0 0 0-10.7-7.56c.3-.03.6-.05.92-.05z" fill="#015958" fill-rule="evenodd"/>
                <circle cx="74.07" cy="31.47" r="2.02" fill="#008F8C"/>
                <path d="M73.12 29.85A3 3 0 0 1 76 32.08a2 2 0 0 0-3.14-2.22h.27z" fill="#015958" fill-rule="evenodd"/>
                <circle cx="80.11" cy="77.6" r="2.02" fill="#008F8C"/>
                <path d="M79.16 76A3 3 0 0 1 82 78.21 2 2 0 0 0 78.89 76h.27z" fill="#015958" fill-rule="evenodd"/>
                <circle cx="54.47" cy="17.54" r="1.17" fill="#008F8C"/>
                <path d="M53.92 16.6a1.72 1.72 0 0 1 1.66 1.3 1.17 1.17 0 0 0-1.82-1.29h.16z" fill="#015958" fill-rule="evenodd"/>
                <circle cx="33.27" cy="88.97" r="1.17" fill="#008F8C"/>
                <path d="M32.72 88a1.72 1.72 0 0 1 1.66 1.3 1.17 1.17 0 0 0-1.81-1.3h.16z" fill="#015958" fill-rule="evenodd"/>
                <circle cx="25.28" cy="36.79" r="1.77" fill="#008F8C"/>
                <path d="M24.46 35.37a2.6 2.6 0 0 1 2.51 2 1.77 1.77 0 0 0-2.75-1.95h.24z" fill="#015958" fill-rule="evenodd"/>
                <circle cx="82.51" cy="51.39" r="3.84" fill="#008F8C"/>
                <path d="M80.71 48.3a5.63 5.63 0 0 1 5.46 4.25 3.84 3.84 0 0 0-6-4.22z" fill="#015958" fill-rule="evenodd"/>
                <circle cx="54.47" cy="64.73" r="3.75" fill="#008F8C"/>
                <path d="M52.71 61.71A5.5 5.5 0 0 1 58 65.86a3.74 3.74 0 0 0-5.83-4.12z" fill="#015958" fill-rule="evenodd"/>
                <circle cx="26.57" cy="75.59" r="2.99" fill="#008F8C"/>
                <path d="M25.17 73.18a4.39 4.39 0 0 1 4.25 3.31 3 3 0 0 0-4.65-3.29z" fill="#015958" fill-rule="evenodd"/>
            </svg>
            <svg class="moon-satelite" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111.8 111.8">
                <circle fill="#0FC2C0" cx="28.3" cy="7.6" r="3"/>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ThreeScenePreloader',

    props: {
        show: {
            type: Boolean,
            default: true,
        },
    },
};
</script>

<style lang="scss" scoped>
    $cubic: cubic-bezier(0.5, 0.8, 0.5, 0.2);

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    #scene-preloader {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 1);
        opacity: 1;
        transition: .2s cubic-bezier(.67, .13, .81, .73);

        &._hidden {
            background: rgba(255, 255, 255, 0);
            visibility: hidden;
            transition: .6s cubic-bezier(.67, .13, .81, .73);

            .svg-wrapper {
                opacity: 0;
                transform: translateY(100%);
                transition: .3s ease-in-out .5s;
            }
        }

        .svg-wrapper {
            position: relative;
            width: 160px;
            height: 160px;
            opacity: 1;
            transition: .3s ease-in-out .2s;

            svg {
                position: absolute;
                top: 0;
                width: 100%;
            }

            .moon-satelite {
                animation-name: spin;
                animation-duration: 2s;
                animation-iteration-count: infinite;
                animation-timing-function: cubic-bezier(.14, .37, .52, .88);
            }
        }
    }
</style>