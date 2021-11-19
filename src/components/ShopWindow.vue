<template>
<div >
  <h2> Витрина магазина </h2>
    <div class="shop-window__wrapper">
      <product-card
        v-for="product in products"
        :product="product"
        :key="product.id"
      />
    </div>
</div>
</template>

<script>
import ProductCard from './ProductCard.vue';
export default {
  components: {
    ProductCard
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  }
};
</script>

<style scoped>
.shop-window__wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  width: 1040px;
}
</style>
