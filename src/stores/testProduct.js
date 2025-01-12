import { defineStore } from "pinia";
import { useProductStore } from "./products";

export const useproductStore = defineStore('product', {
  state: () => ({
    
    productList: [
      { id: 1, category: "shoes", title: "Nike Air Force 1", price: 115, discount: 20, image: "./src/assets/images/NAF1/AF1_W1.png", button: "Checkout" },
      { id: 2, category: "shoes", title: "Nike Air Jordan 4", price: 150, discount: 15, image: "./src/assets/images/NAJ4/NAJ4_1.png", button: "Checkout" },
      { id: 3, category: "shoes", title: "adidas YEEZY Boost 350", price: 230, discount: 30, image: "./src/assets/images/YZY/YZY_W1.png", button: "Checkout" },
      { id: 4, category: "shoes", title: "Onitsuka Tiger Tukuten", price: 90, discount: 15, image: "./src/assets/images/ONIT/ONIT_1.png", button: "Checkout" },
      { id: 5, category: "shoes", title: "Converse Chuck 70", price: 70, discount: 10, image: "./src/assets/images/Converse/CONVRS_1.png", button: "Checkout" },
      { id: 6, category: "shoes", title: "adidas Samba OG", price: 75, discount: 30, image: "./src/assets/images/SAMBA/SAMBA_1.png", button: "Checkout" },
      { id: 7, category: "shoes", title: "New Balance 530", price: 80, discount: 30, image: "./src/assets/images/NB530/NB530_1.png", button: "Checkout" },
      { id: 8, category: "shoes", title: "New Balance 550", price: 90, discount: 30, image: "./src/assets/images/NB550/NB550_1.png", button: "Checkout" },
      { id: 9, category: "shoes", title: "New Balance 9060", price: 120, discount: 30, image: "./src/assets/images/NB9060/NB9060_1.png", button: "Checkout" },
      { id: 10, category: "shoes", title: "Big Yellow Boot", price: 650, discount: 30, image: "./src/assets/images/YELLOW/YELLOW_1.png", button: "Checkout" },
      { id: 11, category: "shoes", title: "Nike Air Jordan 11", price: 160, discount: 30, image: "./src/assets/images/AJ11/AJ11_1.png", button: "Checkout" },
      { id: 12, category: "shoes", title: "YEEZY Foam Runner", price: 100, discount: 30, image: "./src/assets/images/REDRUN/REDRUN_1.png", button: "Checkout" },

      // Accessories Category
      { id: 13, category: "accessories", title: "Shoe Assister", price: 115, discount: 20, image: "./src/assets/images/shoe_assister.png", button: "Checkout" },
      { id: 14, category: "accessories", title: "Shoe Cleanser", price: 150, discount: 15, image: "./src/assets/images/shoe_cleanser.png", button: "Checkout" },
      { id: 15, category: "accessories", title: "Shoe Coloring", price: 230, discount: 30, image: "./src/assets/images/shoe_coloring.png", button: "Checkout" },
      { id: 16, category: "accessories", title: "Shoe Heel", price: 140, discount: 15, image: "./src/assets/images/shoe_heel.png", button: "Checkout" },
      { id: 17, category: "accessories", title: "Shoe Lace", price: 300, discount: 10, image: "./src/assets/images/shoe_lace.png", button: "Checkout" },
      { id: 18, category: "accessories", title: "Shoe Sewer", price: 400, discount: 30, image: "./src/assets/images/shoe_sewer.png", button: "Checkout" },
      
      // Health Category
      { id: 19, category: "health", title: "Vitamin A", price: 115, discount: 20, image: "./src/assets/images/vitamin_a.png", button: "Checkout" },
      { id: 20, category: "health", title: "Vitamin C", price: 150, discount: 15, image: "./src/assets/images/vitamin_c.png", button: "Checkout" },
      { id: 21, category: "health", title: "Vitamin D", price: 230, discount: 30, image: "./src/assets/images/vitamin_d.png", button: "Checkout" },
      { id: 22, category: "health", title: "Calcium Supplement", price: 140, discount: 15, image: "./src/assets/images/calcium.png", button: "Checkout" },
      { id: 23, category: "health", title: "Omega-3 Fish Oil", price: 300, discount: 10, image: "./src/assets/images/omega3.png", button: "Checkout" },
      { id: 24, category: "health", title: "Zinc Tablets", price: 400, discount: 30, image: "./src/assets/images/zinc.png", button: "Checkout" },

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
