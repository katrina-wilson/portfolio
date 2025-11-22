import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { dark, light } from '@/assets/colors';
import '../index.css';
import '@mdi/font/css/materialdesignicons.css';

import '@fontsource/google-sans-code';
import "@fontsource/roboto";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/400-italic.css"; 
import "@fontsource/limelight";
import "@fontsource/limelight/400.css";

import App from './App.vue';
import router from './router';

const vuetify = createVuetify({
  defaults: {},
  options: {
      defaultOptions: {
        global: {
          reset: false,
        },
      },
  },
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          ...light,
        },
      },
      dark: {
        dark: true,
        colors: {
          ...dark,
        },
      },
    },
  },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount('#app');
