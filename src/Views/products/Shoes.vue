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
    <div @click="companiesVisible += step" class="absolute mt-[30px] right-[400px]">
      <ButtonComponent />
    </div>
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
  name: 'Shoes',
  data() {
    return {
      searchQuery: '',
      items: [
        {
          view: "/shoes/1",
          discount: "20%",
          image   : "./src/assets/images/NAF1/AF1_W1.png",
          title   : "Nike Air Force 1",
          price   : "115$",
          button  : "Checkout",
          id: 1,
        },
        {
          view: "/shoes/2",
          discount: "15%",
          image: "./src/assets/images/NAJ4/NAJ4_1.png",
          title: "Nike Air Jordan 4",
          price: "150$",
          button: "Checkout",
          id: 2,
        },
        {
          view: "/shoes/3",
          discount: "30%",
          image: "./src/assets/images/YZY/YZY_W1.png",
          title: "adidas YEEZY Boost 350",
          price: "230$",
          button: "Checkout",
          id: 3,
        },
        {
          view: "/shoes/4",
          discount: "15%",
          image: "./src/assets/images/ONIT/ONIT_1.png",
          title: "Onitsuka Tiger Tokuten",
          price: "90$",
          button: "Checkout",
          id: 4,
        },
        {
          view: "/shoes/5",
          discount: "10%",
          image: "./src/assets/images/Converse/CONVRS_1.png",
          title: "Converse Chuck 70 Classic",
          price: "70$",
          button: "Checkout",
          id: 5,
        },
        {
          view: "/shoes/6",
          discount: "30%",
          image: "./src/assets/images/SAMBA/SAMBA_1.png",
          title: "adidas Samba OG",
          price: "75$",
          button: "Checkout",
          id: 6,
        },
        {
          view: "/shoes/7",
          discount: "30%",
          image: "./src/assets/images/NB530/NB530_1.png",
          title: "New Balance 530",
          price: "80$",
          button: "Checkout",
          id: 7,
        },
        {
          view: "/shoes/8",
          discount: "30%",
          image: "./src/assets/images/NB550/NB550_1.png",
          title: "New Balance 550",
          price: "90$",
          button: "Checkout",
          id: 8,
        },
        {
          view: "/shoes/9",
          discount: "30%",
          image: "./src/assets/images/NB9060/NB9060_1.png",
          title: "New Balance 9060",
          price: "120$",
          button: "Checkout",
          id: 9,
        },
        {
          view: "/shoes/10",
          discount: "30%",
          image: "./src/assets/images/YELLOW/YELLOW_1.png",
          title: "Big Yellow Boot",
          price: "650$",
          button: "Checkout",
          id: 10,
        },
        {
          view: "/shoes/11",
          discount: "30%",
          image: "./src/assets/images/AJ11/AJ11_1.png",
          title: "Nike Air Jordan 11",
          price: "160$",
          button: "Checkout",
          id: 11,
        },
        {
          view: "/shoes/12",
          discount: "30%",
          image: "./src/assets/images/REDRUN/REDRUN_1.png",
          title: "YEEZY Foam Runner",
          price: "100$",
          button: "Checkout",
          id: 12,
        },
      ],
      companiesVisible: 6,
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
