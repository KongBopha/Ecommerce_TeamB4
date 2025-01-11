<template>
  <div class="mb-5">
    <input
          type="text"
          v-model="searchQuery"
          id="default-search"
          class="search-input block w-full p-4 ps-10 text-sm text-gray-400 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-400 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          required
        />
    <div class="grid grid-cols-3 gap-[60px]">
      <router-link
        v-for="items in FilterItems"
        :key="items.id"
        :to="items.view"
      >
        <CardComponent
          :discount="items.discount"
          :image="items.image"
          :title="items.title"
          :price="items.price"
          :button="items.button"
        />
      </router-link>
    </div>
    <!-- <div @click="companiesVisible += step" class="absolute mt-[30px] right-[400px]">
      <ButtonComponent />
    </div> -->
  </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
import CardComponent from '@/components/CardComponent.vue';

export default {
  components: {
    ButtonComponent,
    CardComponent,
  },
  name: 'Health',
  data() {
    return {
      searchQuery: '',
      items: [
        {
          view: "/AirForce1",
          discount: "20%",
          image   : "./src/assets/images/vitamin_a.png",
          title   : "Vitamin A",
          price   : "115$",
          button  : "Checkout",
          id: 1,
        },
        {
          view: "/AirJordan4",
          discount: "15%",
          image: "./src/assets/images/vitamin_c.png",
          title: "Vitamin C",
          price: "150$",
          button: "Checkout",
          id: 2,
        },
        {
          view: "/AirForce1",
          discount: "30%",
          image: "./src/assets/images/vitamin_d.png",
          title: "Vitamin D",
          price: "230$",
          button: "Checkout",
          id: 3,
        },
        // {
        //   view: "/AirForce1",
        //   discount: "15%",
        //   image: "./src/assets/images/NAF4.png",
        //   title: "Nike Air Force 4",
        //   price: "140$",
        //   button: "Card",
        //   id: 4,
        // },
        // {
        //   view: "/AirForce1",
        //   discount: "10%",
        //   image: "./src/assets/images/jordan.png",
        //   title: "Jordan 1",
        //   price: "300$",
        //   button: "Checkout",
        //   id: 5,
        // },
        // {
        //   view: "/AirForce1",
        //   discount: "30%",
        //   image: "./src/assets/images/NAF5.png",
        //   title: "Nike Air Force 5",
        //   price: "400$",
        //   button: "Checkout",
        //   id: 6,
        // },
      ],
      companiesVisible: 3,
      step: 3,
    };
  },
  computed: {
    FilterItems() {
      const filtered = this.searchQuery
        ? this.items.filter(
            (items) =>
              items.title &&
              typeof items.title === 'string' &&
              items.title.toLowerCase().includes(this.searchQuery.toLowerCase())
          )
        : this.items;

      return filtered.slice(0, this.companiesVisible);
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