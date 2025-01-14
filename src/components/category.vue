<!-- CategoryComponent.vue -->
<template>
    <div class="category-container">
      <button
        v-for="category in categories"
        :key="category"
        @click="setCategoryFilter(category)"
        class="category-button"
      >
        {{ category }}
      </button>
    </div>
  </template>
  
  <script setup>
  import { useStore } from '@/stores/store';  // Adjust the import as per your structure
  
  const categories = ["shoes", "accessories", "health"];  // List of categories
  const store = useStore();
  
  // Function to set the category filter in the store
  const setCategoryFilter = (category) => {
    store.setCategory(category);
  };
  </script>
  