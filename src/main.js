import './assets/main.css';

import 'primeicons/primeicons.css'
import { createApp } from 'vue'
//import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router';

import '@fortawesome/fontawesome-free/css/all.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

//app.use(createPinia())
library.add(faMagnifyingGlass);
library.add(faUser);
library.add(faCartShopping);
library.add(faPaperPlane)
library.add(faFacebook);
library.add(faInstagram);
library.add(faTiktok);

 
const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);

app.mount('#app');
