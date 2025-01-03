<template>
    <div class="product-view">
      <router-link :to="'/shoes'"
        class="flex border h-10 w-14 border-gray-300 items-center px-[10px] py-1 -mr-[72px] relative mt-4"
      >
        <span>Back</span>
      </router-link>
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
  
  import AJ4_1 from '@/assets/images/NAJ4/NAJ4_1.png';
  import AJ4_2 from '@/assets/images/NAJ4/NAJ4_2.png';
  import AJ4_3 from '@/assets/images/NAJ4/NAJ4_3.png';
  import AJ4_4 from '@/assets/images/NAJ4/NAJ4_4.png';
  
  export default {
    name: 'Nike Air Jordan 4',
    components: { ProductCard },
    data() {
      return {
        imageSets: {
          white: [AJ4_1, AJ4_2, AJ4_3, AJ4_4]
        },
        currentImages: [],
        mainImage: '',
        colors: ['white'],
        sizes: [39, 40, 41, 42, 43, 44, 45],
        product: {
          title: 'Nike Air Jordan 4',
          price: '$150',
          color: 'white',
          description: 'The Air Jordan 4, Michael Jordan’s fourth signature shoe, debuted in 1989 in February during the 1989 NBA All-Star Game in Houston. The Jordan 4 was the second Jordan model designed by legend Tinker Hatfield. It felt like the perfect evolution of the Air Jordan 3. The shoe also featured a visible Air Max cushioning unit, the iconic netting on the upper, and plastic lace eyelet wings.',
          sizeFit: 'Fits true to size.',
          review: 'The Jordan 4 holds up surprisingly well as an on-court performer. There are of course better performance models nowadays, but, if you are looking for a pair of retro Jordans to hoop in, and you love the Air Jordan 4, go right ahead.'
        },
        reviewer: 'Mab Sengthai'
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
  