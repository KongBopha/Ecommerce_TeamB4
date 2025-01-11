import { createRouter, createWebHistory } from 'vue-router';

import Aboutus from '@/Views/Aboutus.vue';
import AuthenView from '@/Views/AuthenView.vue';
import Contactus from '@/Views/Contactus.vue';
import HomeView from '@/Views/HomeView.vue';
import ProductView from '@/Views/ProductView.vue';
import Signinview from '@/Views/signinview.vue';
import Signupview from '@/Views/signupview.vue';
import CheckoutView from '@/Views/CheckoutView.vue';
import PaymentView from '@/Views/PaymentView.vue';

// Import Components
import CardInfo from '@/components/CardInfo.vue';
import CardPin from '@/components/CardPin.vue';
import BankInfo from '@/components/BankInfo.vue';
import TransferInfo from '@/components/TransferInfo.vue';
import Button from '@/components/button.vue';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    children: [
      { path: '', redirect: '/shoes' }, // Default route to /home/shoes
      { path: 'shoes', component: () => import('../Views/products/Shoes.vue') },
      { path: 'Accessories', component: () => import('../Views/products/Accessories.vue') },
      { path: 'Health', component: () => import('../Views/products/Health.vue') },
    ]
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: Aboutus,
  },
  {
    path: '/Signin',
    name: 'SignUp',
    component: AuthenView,
  },
  {
    path: '/contact',
    name: 'contactus',
    component: Contactus,
  },
  {
    path: '/signinview',
    name: 'signinview',
    component: Signinview,
  },
  {
    path: '/signupview',
    name: 'signupview',
    component: Signupview,
  },
  {
    path: '/shoes/:id',
    name: 'ProductView',
    component: ProductView,
    props: true,
  },
  {
    path: '/checkout',
    name: 'CheckoutView',
    component: CheckoutView
  },
  {
    path: '/checkout/payments',
    component: PaymentView,
    children: [
      {
        path: 'card',
        component: CardInfo,
      },
      {
        path: 'cardPin',
        component: CardPin,
      },
      {
        path: 'bank',
        component: BankInfo,
      },
      {
        path: 'transfer',
        component: TransferInfo,
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
