<template>
 <div class="container">
 
  </div>
  <div class="full-width-wrapper">
    <Promobox />
  </div>

  <div class="container">
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
  padding: 20px;
  
}
.hero-title {
  font-size: 1.5rem;
  line-height: 1.4;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
  color: #333;  
}


.search-bar-container {
  position: relative;
  margin-bottom: 30px;
  text-align: center;
}

.search-bar {
  width: 100%;
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

.content-container {
  display: flex;
  gap: 50px;
  align-items: flex-start;
  flex-wrap: wrap;
}
.full-width-wrapper {
  margin: 0;
  padding: 0;
}

.full-width-wrapper > * {
  width: 100%;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 14px;
  }

  .container {
    padding: 10px;
  }

  .content-container {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
