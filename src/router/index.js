import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../../views/HomeView.vue';

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
    path: '/SignUp',
    name:'SignUp',
    component:SignUp
  },
  {
    path:'/contact',
    name:'contactus',
    component: Contactus
  },
  {
    path:'/Signin',
    name:'signin',
    component:Signin
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
