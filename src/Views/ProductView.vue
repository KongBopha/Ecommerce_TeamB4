<template>
  <div class="product-view" v-if="product">
    <router-link :to="'/shoes'"
        class="flex border h-10 w-14 border-gray-300 items-center px-[10px] py-1 -mr-[72px] relative mt-4"
      >
        <span>Back</span>
      </router-link>
    <ProductCard
      :images="currentImages"
      :mainImage="mainImage"
      :title="product.name"
      :price="product.price"
      :color="selectedColor"
      :colors="product.colors"
      :sizes="product.sizes"
      :description="product.description"
      :sizeFit="product.sizeFit"
      :review="product.review"
      :reviewer="product.reviewer"
      @colorSelected="updateImages"
      @updateMainImage="updateMainImage"
    />
  </div>
</template>

<script>
import { useProductStore } from '@/stores/products';
import { computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ProductCard from '@/components/ProductCard.vue';

export default {
  components: { ProductCard },
  setup() {
    const route = useRoute();
    const store = useProductStore();

    const product = computed(() => store.getProductById(parseInt(route.params.id)));

    const selectedColor = ref(product.value?.color || '');

    const currentImages = computed(() => {
      return product.value?.images[selectedColor.value] || [];
    });

    const mainImage = ref(currentImages.value.length ? currentImages.value[0] : null);

    const updateImages = (color) => {
      selectedColor.value = color;
      mainImage.value = currentImages.value[0] || null;
    };

    const updateMainImage = (image) => {
      mainImage.value = image; 
    };

    onMounted(() => {
      window.scrollTo(0, 0);
    });


    return {
      product,
      selectedColor,
      currentImages,
      mainImage,
      updateImages,
      updateMainImage,
    };
  },
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
