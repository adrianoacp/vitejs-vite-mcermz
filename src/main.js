import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { Quasar } from 'quasar';
import { createPinia } from 'pinia';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';

const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {},
});

myApp.use(createPinia());

myApp.mount('#app');
