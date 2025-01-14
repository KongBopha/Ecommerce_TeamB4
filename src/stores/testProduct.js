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
      { id: 13, category: "shoes", title: "Balenciaga Speed", price: 350, discount: 30, image: "./src/assets/images/BALEN/BALEN_1.png", button: "Checkout" },
      { id: 14, category: "shoes", title: "Nike Air Jordan 1", price: 240, discount: 30, image: "./src/assets/images/NAJ1/NAJ1_1.png", button: "Checkout" },
      { id: 15, category: "shoes", title: "adidas Campus", price: 120, discount: 30, image: "./src/assets/images/CAMPUS/CAMPUS_1.png", button: "Checkout" },
      { id: 16, category: "shoes", title: "adidas Ultraboost", price: 100, discount: 30, image: "./src/assets/images/ULTRA/ULTRA_1.png", button: "Checkout" },

      // Accessories Category
      { id: 17, category: "accessories", title: "Nike Ankle Socks 6 pack", price: 10, discount: 20, image: "./src/assets/images/SOCKS/SOCKS_S1.png", button: "Checkout" },
      { id: 18, category: "accessories", title: "Nike Long Socks 6 pack", price: 12, discount: 15, image: "./src/assets/images/SOCKS/SOCKS_L1.png", button: "Checkout" },
      { id: 19, category: "accessories", title: "Cleaning Mini Kit", price: 8, discount: 30, image: "./src/assets/images/SHOECARE/CLEAN_1.png", button: "Checkout" },
      { id: 20, category: "accessories", title: "Repel Spray", price: 10, discount: 15, image: "./src/assets/images/SHOECARE/SPRAY_1.png", button: "Checkout" },
      { id: 21, category: "accessories", title: "Protect Foam x CLeaner", price: 10, discount: 10, image: "./src/assets/images/SHOECARE/FOAM_1.png", button: "Checkout" },
      { id: 22, category: "accessories", title: "Crease Protector", price: 6, discount: 30, image: "./src/assets/images/SHOECARE/CREASE_1.png", button: "Checkout" },
      
      // Health Category
      { id: 23, category: "health", title: "Fitbit Charge 6", price: 130, discount: 20, image: "./src/assets/images/FITBIT/CHARGE_O1.png", button: "Checkout" },
      { id: 24, category: "health", title: "Fitbit Inspire 3", price: 100, discount: 15, image: "./src/assets/images/FITBIT/INSPIRE_B1.png", button: "Checkout" },
      { id: 25, category: "health", title: "Fitbit Luxe", price: 170, discount: 30, image: "./src/assets/images/FITBIT/LUXE_1.png", button: "Checkout" },

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
