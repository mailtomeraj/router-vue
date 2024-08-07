import { createApp } from 'vue'
import App from './App.vue'

import Header from './components/header/index.vue';
import router from './router';

const app =  createApp(App);

app.component('app-header',Header);
app.use(router)
app.mount('#app')
