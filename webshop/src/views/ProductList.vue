<script setup>

</script>

<template>
  <div class="container">
    <div class="product-list">
      <h2>Product List</h2>
      <div v-for="product in products" :key="product.id" class="product">
        <p>{{ product.name }}</p>
        <p>{{ product.price }}</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const products = ref([
  { id: 1, name: 'Nike Dunk Panda', price: 10 },
  { id: 2, name: 'Nike Jordan 1', price: 20 },
  { id: 3, name: 'Sketcher', price: 30 }
]);

const addToCart = (product) => {
  console.log('Adding product to cart:', product);
  // Add your logic to add the product to the cart here
};
</script>
