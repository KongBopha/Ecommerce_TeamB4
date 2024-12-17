import Aboutus from '@/Views/Aboutus.vue';
import AuthenView from '@/Views/AuthenView.vue';
import Contactus from '@/Views/Contactus.vue';
import HomeView from '@/Views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'HomeView',  
    component: HomeView,
  },
  {
    path:'/aboutus',
    name:'aboutus',
    component:Aboutus
  },
  {
    path: '/Signin',
    name:'SignUp',
    component:AuthenView
  },
  {
    path:'/contact',
    name:'contactus',
    component: Contactus
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
