<template>
  <section>
    <div class="border border-gray-300 w-64 ml-[100px]">
      <!-- Shoes Category Link -->
      <router-link 
        :to="'/shoes'"
        class="flex border border-gray-300 items-center px-[10px] py-1 gap-4"
        @click.native="setCategoryFilter('shoes')"  
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
        :to="'/accessories'"
        class="flex border border-gray-300 items-center px-[13px] py-1 gap-4"
        @click.native="setCategoryFilter('accessories')" 
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
        :to="'/health'"
        class="flex border border-gray-300 items-center px-[13px] py-1 gap-4"
        @click.native="setCategoryFilter('health')"   
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

<script setup>
import { useStore } from "@/stores/store";

const store = useStore();  // Access the store

// Function to set the category filter in the store
const setCategoryFilter = (category) => {
  store.setCategory(category);
};
</script>

<style scoped>
/* Add your custom styles here for borders, padding, and hover effects */
.router-link-active {
  background-color: #e0e0e0;
}

.border {
  border-color: #ddd;
}

.w-64 {
  width: 16rem;
}


.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.gap-4 {
  gap: 1rem;
}



.py-1 {
  padding-top: 4px;
  padding-bottom: 4px;
}

.w-7 {
  width: 28px;
}

.h-7 {
  height: 28px;
}

.w-6 {
  width: 24px;
}

.h-6 {
  height: 24px;
}

span {
  font-size: 1rem;
}
</style>
