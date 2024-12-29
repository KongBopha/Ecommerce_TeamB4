<template>
  <div class="product-view">
    <ProductCard 
      :images="currentImages" 
      :mainImage="mainImage" 
      :title="product.title" 
      :price="product.price" 
      :color="product.color" 
      :colors="colors"
      :sizes="sizes" 
      :description="product.description"
      :sizeFit="product.sizeFit"
      :review="product.review"
      :reviewer="reviewer"
      @colorSelected="updateImages" 
      @updateMainImage="updateMainImage" 
    />
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";

import AF1_W1 from '@/assets/images/NAF1/AF1_W1.png';
import AF1_W2 from '@/assets/images/NAF1/AF1_W2.png';
import AF1_W3 from '@/assets/images/NAF1/AF1_W3.png';
import AF1_W4 from '@/assets/images/NAF1/AF1_W4.png';
import AF1_B1 from '@/assets/images/NAF1/AF1_B1.png';
import AF1_B2 from '@/assets/images/NAF1/AF1_B2.png';
import AF1_B3 from '@/assets/images/NAF1/AF1_B3.png';
import AF1_B4 from '@/assets/images/NAF1/AF1_B4.png';

export default {
  name: 'Nike Air Force 1',
  components: { ProductCard },
  data() {
    return {
      imageSets: {
        white: [AF1_W1, AF1_W2, AF1_W3, AF1_W4],
        black: [AF1_B1, AF1_B2, AF1_B3, AF1_B4]
      },
      currentImages: [],
      mainImage: '',
      colors: ['white', 'black'],
      sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
      product: {
        title: 'Nike Air Force 1',
        price: '$115',
        color: 'white',
        description: 'The Nike Air Force 1 Low White ‘07 features an all-white leather upper with a perforated toe box and Swoosh overlays. A Nike heel embroidery and white sole complete the design. The Nike Air Force 1 Low White ‘07 originally released in 2007, but since it is an essential colorway to the brand, it consistently restocks.',
        sizeFit: 'Fits large; we recommend ordering a size down',
        review: 'Can be used for casual or dress shoes. The leather and sole hold up extremely well. The only weak point would be the side lining inside wearing out after seventeen months of use.'
      },
      reviewer: 'Mark Cuban'
    };
  },
  created() {
    this.updateImages(this.product.color);
  },
  methods: {
    updateImages(color) {
      this.currentImages = this.imageSets[color] || [];
      this.mainImage = this.currentImages[0];
    },

    updateMainImage(image) {
      this.mainImage = image;
    }
  }
};
</script>

<style scoped>
.product-view {
  display: flex;
  justify-content: center;
  padding: 20px;
  flex-wrap: wrap;
}
</style>
