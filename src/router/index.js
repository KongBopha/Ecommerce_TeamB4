import { createRouter, createWebHistory } from 'vue-router';

import Aboutus from '@/views/Aboutus.vue';
import AuthenView from '@/views/AuthenView.vue';
import Contactus from '@/views/Contactus.vue';
import HomeView from '@/views/HomeView.vue';
import ProductViewNAF1 from '@/views/ProductViewNAF1.vue';
import ProductViewNAJ4 from '@/views/ProductViewNAJ4.vue';
import Signinview from '@/views/signinview.vue';
import Signupview from '@/views/signupview.vue';
import CheckoutView from '@/views/CheckoutView.vue';
import PaymentView from '@/views/PaymentView.vue';
import OrderComplete from '@/views/OrderComplete.vue';

// Import Components
import CardInfo from '@/components/CardInfo.vue';
import CardPin from '@/components/CardPin.vue';
import BankInfo from '@/components/BankInfo.vue';
import TransferInfo from '@/components/TransferInfo.vue';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    children: [
      { path: '', redirect: '/shoes' }, // Default route to /home/shoes
      { path: 'shoes', component: () => import('../views/products/Shoes.vue') },
      { path: 'Accessories', component: () => import('../views/products/Accessories.vue') },
      { path: 'Health', component: () => import('../views/products/Health.vue') },
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
    path: '/AirForce1',
    name: 'Air-Force-1',
    component: ProductViewNAF1,
    props: true,
  },
  {
    path: '/AirJordan4',
    name: 'Air-Jordan-4',
    component: ProductViewNAJ4,
    props: true,
  },
  {
    path: '/checkout',
    component: CheckoutView,
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
  {
    path: '/checkout/payments/complete',
    component: OrderComplete,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;