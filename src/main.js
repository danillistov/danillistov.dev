import { createApp } from 'vue';
import App from './App.vue';

import router from './router';

const app = createApp(App);
app.use(router);
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

console.log(app);

