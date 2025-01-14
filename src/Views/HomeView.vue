<template>
 <div class="container">
 
  </div>
  <div class="full-width-wrapper">
    <Promobox />
  </div>

  <div class="container">
    <div class="content-container">
      <div class ="product-category sticky top-0">
      <CategoryComponent />
      </div>
      <div class="product-grid">
      <router-view />
      </div>
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

.content-container {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}

.product-category {
  width: 200px; /* adjust the width as needed */
  margin-top: 20px;
  margin-right: 60px; /* add a margin to create space between the category and products */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.product-grid {
  flex: 1;
  padding-top: 20px;
}

.sticky {
  position: sticky;
  top: 0;
  z-index: 1;
}
/* .hero-title {
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
} */
</style>
