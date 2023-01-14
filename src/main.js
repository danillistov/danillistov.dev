import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store/store';
import i18n from './locales/i18n';

import "./assets/scss/common.scss";

const app = createApp(App);
const plugins = [router, i18n, store];

plugins.forEach((plugin) => {
    app.use(plugin);
});

app.mount('#app');

app.config.globalProperties.$colorTheme = {
    black: '#1C1D21',
    grey: '#31353D',
    darkBlue: '#445878',
    lightBlue: '#92CDCF',
    white: '#EEEFF7',
    success: '#00B000',
    error: '#E74C3C',
};

