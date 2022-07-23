import { createI18n } from 'vue-i18n';

import en from './dictionary/en.json';
import ru from './dictionary/ru.json';
import jp from './dictionary/jp.json';

const dictionary = {
    locale: 'en',
    messages: {
        en,
        ru,
        jp,
    },
};

export default createI18n(dictionary);