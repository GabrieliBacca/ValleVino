import App from './App.vue'; // Replace with the correct path to your App component
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

let messages;

const loadLocaleMessages = async () => {
  const locales = ['en', 'pt', 'tr'];
  const messages = {};

  for (const locale of locales) {
    try {
      const response = await fetch(`/locales/${locale}.json`);
      const data = await response.json(); // Assuming the response is valid JSON

      if (response.ok) {
        messages[locale] = data;
      } else {
        console.error(`Failed to load locale messages for ${locale}`);
      }
    } catch (error) {
      console.error(`Error fetching locale messages for ${locale}`, error);
    }
  }

  return messages;
};

const initApp = async () => {
  const messages = await loadLocaleMessages();

  const i18n = createI18n({
    locale: 'pt', // Define the default locale directly
    fallbackLocale: 'pt', // Define the fallback locale directly
    messages: messages
  });

  // const app = createApp(App);
  // app.use(i18n);
  // app.mount('#app');
  // app.unmount('#app');
};
initApp(); // Chame initapp() daqui

const i18n = createI18n({
  locale: 'pt',
  fallbackLocale: 'pt',
  messages: messages
});


const initI18n = () => {
  return i18n;
};

export { initI18n };
