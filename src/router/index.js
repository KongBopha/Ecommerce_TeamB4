import Aboutus from '@/Views/Aboutus.vue';
import AuthenView from '@/Views/AuthenView.vue';
import Contactus from '@/Views/Contactus.vue';
import HomeView from '@/Views/HomeView.vue';
import ProductViewNAF1 from '@/Views/ProductViewNAF1.vue';
import ProductViewNAJ4 from '@/Views/ProductViewNAJ4.vue';
import Signinview from '@/Views/signinview.vue';
import Signupview from '@/Views/signupview.vue';

import { createRouter, createWebHistory } from 'vue-router';

import CheckoutView from '@/views/CheckoutView.vue';
import PaymentView from '@/views/PaymentView.vue';

import CardInfo from '@/components/CardInfo.vue';
import CardPin from '@/components/CardPin.vue';
import BankInfo from '@/components/BankInfo.vue';
import TransferInfo from '@/components/TransferInfo.vue';
import Button from '@/components/button.vue';

const routes = [
  // Button component is just for testing purposes. You can remove and connect it to the right route.
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
      { path: 'transfer', 
        component: TransferInfo,
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
