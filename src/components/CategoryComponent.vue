<script setup></script>

<template>
  <section>
    <div class="border border-gray-300 w-64">
      <router-link :to="'/shoes'"
        class="flex border border-gray-300 items-center px-[10px] py-1 gap-4"
      >
        <img
          src="@/assets/images/ShoeIcon.png"
          alt="Shoe Icon"
          class="w-7 h-7"
        />
        <span>Shoes</span>
      </router-link>
      <router-link :to="'/Accessories'"
        class="flex border border-gray-300 items-center px-[13px] py-1 gap-4"
      >
        <img
          src="@/assets/images/AccessoryIcon.png"
          alt="Accessory Icon"
          class="w-6 h-6"
        />
        <span>Accessories</span>
      </router-link>
      <router-link :to="'/Health'" class="flex border items-center px-[13px] py-1 gap-4">
        <img
          src="@/assets/images/HealthIcon.png"
          alt="Health & Wellness Icon"
          class="w-6 h-6"
        />
        <span>Health and Wellness</span>
      </router-link>
    </div>
  </section>
</template>
