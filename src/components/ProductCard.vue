<template>
  <div class="product-card">
    <ProductImage :images="images" :mainImage="mainImage" @updateMainImage="updateMainImage" />
    <ProductInfo 
      :title="title" 
      :price="price" 
      :color="color" 
      :colors="colors" 
      :sizes="sizes"
      @colorSelected="updateColor" 
    />
    <ProductDetails :description="description" :sizeFit="sizeFit" :review="review" :reviewer="reviewer"/>
  </div>
</template>

<script>
import ProductImage from "./ProductImage.vue";
import ProductInfo from "./ProductInfo.vue";
import ProductDetails from "./ProductDetails.vue";

export default {
  components: { ProductImage, ProductInfo, ProductDetails },
  props: {
    images: {
      type: Array,
      required: true
    },
    mainImage: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    colors: {
      type: Array,
      required: true
    },
    sizes: {
      type: Array,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    sizeFit: {
      type: String,
      required: true
    },
    review: {
      type: String,
      required: true
    },
    reviewer: {
      type: String,
      default: 'Anonymous'
    }
  },
  methods: {
    updateColor(color) {
      this.$emit('colorSelected', color);
    },
    updateMainImage(image) {
      this.$emit('updateMainImage', image);
    }
  }
};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
}

.product-image-wrapper {
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
}

.product-info {
  min-width: 300px;
}

.product-details {
  margin-top: 0px;
}
</style>