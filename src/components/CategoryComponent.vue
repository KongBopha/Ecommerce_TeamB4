<script setup>
import { useRoute } from 'vue-router';
import { useproductStore } from '../stores/testProduct'; // Import your product store

const productStore = useproductStore(); // Access the store
const route = useRoute(); // Access the current route
</script>

<template>
  <section>
    <div class="border border-gray-300 w-64 ml-[100px]">
      <!-- Shoes Category Link -->
      <router-link 
        :to="'/shoes'"
        class="flex border border-gray-300 items-center px-[10px] py-1 gap-4"
        @click.native="productStore.setCategory('shoes')"  
      >
        <img
          src="@/assets/images/ShoeIcon.png"
          alt="Shoe Icon"
          class="w-7 h-7"
        />
        <span>Shoes</span>
      </router-link>

      <!-- Accessories Category Link -->
      <router-link 
        :to="'/Accessories'"
        class="flex border border-gray-300 items-center px-[13px] py-1 gap-4"
        @click.native="productStore.setCategory('accessories')" 
      >
        <img
          src="@/assets/images/AccessoryIcon.png"
          alt="Accessory Icon"
          class="w-6 h-6"
        />
        <span>Accessories</span>
      </router-link>

      <!-- Health Category Link -->
      <router-link 
        :to="'/Health'"
        class="flex border items-center px-[13px] py-1 gap-4"
        @click.native="productStore.setCategory('health')"   
      >
        <img
          src="@/assets/images/HealthIcon.png"
          alt="Health & Wellness Icon"
          class="w-6 h-6"
        />
        <span>Health and Fitness</span>
      </router-link>
    </div>
  </section>
</template>
