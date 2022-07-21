import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import i18n from './locales/i18n';

const app = createApp(App);
app.use(router);
app.use(i18n);
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

