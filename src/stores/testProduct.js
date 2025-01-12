import { defineStore } from "pinia";
import { useProductStore } from "./products";

export const useproductStore = defineStore('product', {
  state: () => ({
    
    productList: [
      { id: 1, category: "shoes", title: "Nike Air Force 1", price: 115, discount: 20, image: "./src/assets/images/NAF1.png", button: "Checkout" },
      { id: 2, category: "shoes", title: "Nike Air Jordan 4", price: 150, discount: 15, image: "./src/assets/images/NAJ4/NAJ4_1.png", button: "Checkout" },
      { id: 3, category: "shoes", title: "Nike Air Force 3", price: 230, discount: 30, image: "./src/assets/images/NAF3.png", button: "Card" },
      { id: 4, category: "shoes", title: "Nike Air Force 4", price: 140, discount: 15, image: "./src/assets/images/NAF4.png", button: "Card" },
      { id: 5, category: "shoes", title: "Jordan 1", price: 300, discount: 10, image: "./src/assets/images/jordan.png", button: "Checkout" },
      { id: 6, category: "shoes", title: "Adidas Aerobounce", price: 400, discount: 30, image: "./src/assets/images/A_aerobounce.png", button: "Checkout" },
      { id: 7, category: "shoes", title: "Adidas Ash Pearl", price: 400, discount: 30, image: "./src/assets/images/A_ashpearl.png", button: "Checkout" },
      { id: 8, category: "shoes", title: "Adidas Galaxy 6", price: 400, discount: 30, image: "./src/assets/images/A_galaxy6.png", button: "Checkout" },
      { id: 9, category: "shoes", title: "Adidas Multi X", price: 400, discount: 30, image: "./src/assets/images/A_multix.png", button: "Checkout" },
      { id: 10, category: "shoes", title: "Adidas Prime Blue", price: 400, discount: 30, image: "./src/assets/images/A_primeblue_wbg.png", button: "Checkout" },
      { id: 11, category: "shoes", title: "Adidas White Core", price: 400, discount: 30, image: "./src/assets/images/A_whitecore.png", button: "Checkout" },

      // Health Category
      { id: 18, category: "health", title: "Vitamin A", price: 115, discount: 20, image: "./src/assets/images/vitamin_a.png", button: "Checkout" },
      { id: 19, category: "health", title: "Vitamin C", price: 150, discount: 15, image: "./src/assets/images/vitamin_c.png", button: "Checkout" },
      { id: 20, category: "health", title: "Vitamin D", price: 230, discount: 30, image: "./src/assets/images/vitamin_d.png", button: "Checkout" },
      { id: 21, category: "health", title: "Calcium Supplement", price: 140, discount: 15, image: "./src/assets/images/calcium.png", button: "Checkout" },
      { id: 22, category: "health", title: "Omega-3 Fish Oil", price: 300, discount: 10, image: "./src/assets/images/omega3.png", button: "Checkout" },
      { id: 23, category: "health", title: "Zinc Tablets", price: 400, discount: 30, image: "./src/assets/images/zinc.png", button: "Checkout" },

      // Accessories Category
      { id: 12, category: "accessories", title: "Shoe Assister", price: 115, discount: 20, image: "./src/assets/images/shoe_assister.png", button: "Checkout" },
      { id: 13, category: "accessories", title: "Shoe Cleanser", price: 150, discount: 15, image: "./src/assets/images/shoe_cleanser.png", button: "Checkout" },
      { id: 14, category: "accessories", title: "Shoe Coloring", price: 230, discount: 30, image: "./src/assets/images/shoe_coloring.png", button: "Checkout" },
      { id: 15, category: "accessories", title: "Shoe Heel", price: 140, discount: 15, image: "./src/assets/images/shoe_heel.png", button: "Checkout" },
      { id: 16, category: "accessories", title: "Shoe Lace", price: 300, discount: 10, image: "./src/assets/images/shoe_lace.png", button: "Checkout" },
      { id: 17, category: "accessories", title: "Shoe Sewer", price: 400, discount: 30, image: "./src/assets/images/shoe_sewer.png", button: "Checkout" },
    ],
    cart: [],
    currentCategory: 'shoes', // Default category
    searchQuery: ''
  }),

  getters: {
    filteredProducts(state) {
      return state.productList.filter((product) => 
        product.category === state.currentCategory &&
        product.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
    ProductPageDetails: (state) => (productId) => {
      return state.productList.find((product) => product.id === productId);
    },
  },

  actions: {
    setSearchQuery(query) {
      this.searchQuery = query;
    },
    setCategory(category) {
      this.currentCategory = category;
    }
  }
});
