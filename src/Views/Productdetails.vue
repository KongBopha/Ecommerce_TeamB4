<template>
    <div>
      <h1>Product Detail</h1>
      <p>Product ID: {{ productId }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductDetail',
    data() {
      return {
        productId: this.$route.params.id, // Get the id parameter from the route
      };
    },
  };
  </script>
  