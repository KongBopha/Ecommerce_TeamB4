<template>
  <div class="mb-5">
    <!-- Search Input -->
    <input
      type="text"
      v-model="searchQuery"
      id="default-search"
      class="search-input block w-full p-4 ps-10 text-sm text-gray-400 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-400 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search Mockups, Logos..."
      required
    />

    <!-- Product Grid -->
    <div class="grid grid-cols-3 gap-[60px]">
      <router-link
        v-for="item in filteredItems"
        :key="item.id"
        :to="{ name: 'ProductView', params: { id: item.id } }"
      >
        <CardComponent
          :discount="item.discount"
          :image="item.image"
          :title="item.title"
          :price="item.price"
          :button="item.button"
        />
      </router-link>
    </div>

    <!-- Button to Load More Products -->
    <div @click="companiesVisible += step" class="absolute mt-[30px] right-[400px]">
      <ButtonComponent />
    </div>
  </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import { useproductStore } from '@/stores/testProduct';

export default {
  components: {
    ButtonComponent,
    CardComponent,
  },
  name: 'Accessories',
  data() {
    return {
      companiesVisible: 3,
      step: 3,
    };
  },
  computed: {
    searchQuery: {
      get() {
        return useproductStore().searchQuery;
      },
      set(value) {
        useproductStore().setSearchQuery(value);
      },
    },

    filteredItems() {
      const store = useproductStore();
      return store.filteredProducts.slice(0, this.companiesVisible);
    },
  },
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