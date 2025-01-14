<template>
  <div class="container">
    <div class="full-width-wrapper">
      <!-- Promo Box Section -->
      <Promobox />
    </div>

    <!-- Search Input Section -->
    <div class="search-bar-container sticky top-0">
      <input
        type="text"
        v-model="searchQuery"
        @input="updateSearchQuery"
        class="search-input block w-full p-4 text-sm border rounded-lg"
        placeholder="Search products..."
      />
    </div>

    <!-- Content Section with Category and Products -->
    <div class="content-container">
      <!-- Category Component (Sticky on the left) -->
      <div class="product-category sticky top-0">
        <CategoryComponent />
      </div>

      <!-- Product Grid Section -->
      <div class="product-grid flex-1">
        <div class="grid gap-20 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
          <router-link
            v-for="product in filteredItems"
            :key="product.id"
            :to="{ name: 'ProductView', params: { id: product.id } }"
          >
            <CardComponent
              :discount="product.discount" 
              :image="product.image"
              :title="product.title"
              :price="product.price"
              :button="product.button"
              @add-to-cart="addToCart(product)"
            />
          </router-link>
        </div>

        <!-- Button to Load More Products -->
        <div 
          v-if="hasMoreItems"
          @click="loadMore" 
          class="relative w-full flex justify-center mt-[30px] mb-[30px]"
        >
          <div class="absolute left-[630px]">
            <ButtonComponent />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from '@/stores/store';  
import { useproductStore } from '@/stores/testProduct';
import Promobox from "@/components/Promobox.vue";
import CardComponent from "@/components/CardComponent.vue";
import CategoryComponent from "@/components/CategoryComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

const route = useRoute();
const products = useStore();  
const productsStore = useproductStore();
const searchQuery = ref('');
const companiesVisible = ref(8);
const step = 4;

// Watch for category changes in route and update the store category
watchEffect(() => {
  const category = route.path.split('/').pop();
  console.log('Selected category:', category);
  products.setCategory(category);
});

// Update search query in the store
const updateSearchQuery = () => {
  products.setSearchQuery(searchQuery.value);  // Corrected method name here
};

// Filter products based on search query and visibility
const filteredItems = computed(() => {
  const filteredBySearch = products.filteredProducts.filter(product => 
    product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
  return filteredBySearch.slice(0, companiesVisible.value);
});

// Check if there are more items to load
const hasMoreItems = computed(() => 
  companiesVisible.value < products.filteredProducts.length
);

// Load more products when the button is clicked
const loadMore = () => {
  companiesVisible.value += step;
};

// Add product to the cart
const addToCart = async (product) => {
  products.addToCart(product);
  await nextTick();
};
</script>

<style scoped>
.container {
  width: 100%;
  padding: 20px;
}

.content-container {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
}

.product-category {
  width: 250px;   
  margin-right: 200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.product-grid {
  flex: 1;
  padding-top: 20px;
}

.search-bar-container {
  margin-bottom: 10px;
}

.search-input {
  width: 100%;
  padding: 8px;
  font-size: 14px;
}

.sticky {
  position: sticky;
  top: 0;
  z-index: 1;
}

@media (max-width: 768px) {
  .content-container {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
