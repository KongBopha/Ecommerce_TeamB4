<template>
  <div class="mb-5">
    <div class =" search-bar-container sticky top-0">

    <input
      type="text"
      v-model="searchQuery"
      id="default-search"
      class="search-input block w-full p-4 text-sm border rounded-lg"
      placeholder="Search Vitamins, Supplements..."
      required
    />

      </div>
    <div class="grid gap-20 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4" style="margin-left: calc(100% - 90% - 10px);">
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
  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue';
import { useproductStore } from '@/stores/testProduct';  

export default {
  components: {
    CardComponent,
  },
  name: 'Health',
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
  data() {
    return {
      companiesVisible: 3, // Limit the number of products displayed
      step: 3,
    };
  },
  methods: {
  
    updateSearchQuery(query) {
      useproductStore().setSearchQuery(query);
    },
  },
  watch: {
    searchQuery(newQuery) {
      this.updateSearchQuery(newQuery);
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
.search-bar-container {
  position: sticky;
  top: 0;
  transform: translateY(-50%);
  z-index: 1;
  width: 100%;
  text-align: center;
}
product-grid {
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