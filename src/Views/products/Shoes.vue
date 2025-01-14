<template>
  <div class="mb-5">
    <!-- Search Input -->
    <div class="search-bar-container sticky top-0">
      <input
        type="text"
        v-model="searchQuery"
        @input="updateSearchQuery"
        class="search-input block w-full p-4 text-sm border rounded-lg"
        placeholder="Search Shoes..."
      />
    </div>
    <div class="grid gap-20 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4" style="margin-left: calc(100% - 90% - 10px);">
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
</template>

<script>
import { ref, computed, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useproductStore } from '@/stores/testProduct';
import CardComponent from '@/components/CardComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

export default {
  name: 'Shoes',
  components: {
    CardComponent,
    ButtonComponent,
  },
  setup() {
    const route = useRoute();
    const productStore = useproductStore();
    const searchQuery = ref('');
    const companiesVisible = ref(8);
    const step = 4;

    // Update the store when the route changes
    watchEffect(() => {
      const category = route.path.split('/').pop();
      productStore.setCategory(category);
    });

    const updateSearchQuery = () => {
      productStore.setSearchQuery(searchQuery.value);
    };

    // Get filtered items with pagination
    const filteredItems = computed(() => 
      productStore.filteredProducts.slice(0, companiesVisible.value)
    );

    // Check if there are more items to load
    const hasMoreItems = computed(() => 
      companiesVisible.value < productStore.filteredProducts.length
    );

    // Load more items function
    const loadMore = () => {
      companiesVisible.value += step;
    };

    return {
      searchQuery,
      filteredItems,
      updateSearchQuery,
      hasMoreItems,
      loadMore
    };
  }
};
</script>

<style scoped>
main {
  width: 650px;
  height: auto;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: x-small;
  padding: 20px;
  text-align: start;
}

.search-bar-container {
  position: sticky;
  top: 0;
  transform: translateY(-50%);
  z-index: 1;
  width: 100%;
  text-align: center;
}

.product-grid {
  padding-top: 60px;
}

.search-input {
  width: 50%;
  margin: 0 auto;
}

.container {
  height: auto;
  width: auto;
  padding-right: 800px;
  padding-bottom: 620px;
}

.searchBar {
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 2px solid #222222;
  border-radius: 20px;
  text-indent: 50px;
}

.icon-white {
  position: absolute;
  color: rgb(0, 0, 0);
  margin-left: 20px;
  margin-top: -30px;
}

input::placeholder {
  font-style: italic;
  opacity: 0.8;
  text-indent: 50px;
}

input {
  position: relative;
  display: block;
  width: 330px;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  font-size: 12px;
  border: none;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>