<template>
  <div class="container">
    <h1 class="hero-title">
      Welcome to SparkFoot—where every step sparks something extraordinary. 
      Discover a world of footwear designed to elevate your style, ignite your confidence, 
      and keep you moving with energy.
    </h1>

    <!-- Search Bar -->
    <div class="search-bar-container">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search here..."
        class="search-bar"
      />
      <font-awesome-icon class="search-icon" :icon="['fas', 'magnifying-glass']" />
    </div>

    <!-- Promo Section -->
    <div class="promo-section">
      <Promobox />
    </div>

    <!-- Category and Content -->
    <div class="content-container">
      <CategoryComponent />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Promobox from "@/components/Promobox.vue";
import CategoryComponent from "@/components/CategoryComponent.vue";

const searchQuery = ref("");
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.hero-title {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
}

.search-bar-container {
  position: relative;
  margin-bottom: 30px;
  text-align: center;
}

.search-bar {
  width: 50%;
  max-width: 500px;
  padding: 12px 20px;
  font-size: 16px;
  border: 2px solid #222222;
  border-radius: 25px;
  outline: none;
}

.search-icon {
  position: absolute;
  right: 25%;
  top: 50%;
  transform: translateY(-50%);
  color: #000;
}

.promo-section {
  margin-bottom: 40px;
}

.content-container {
  display: flex;
  gap: 50px;
}
</style>
