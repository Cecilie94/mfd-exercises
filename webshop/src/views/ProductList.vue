<script setup>

</script>

<template>
<div class="container">
  <div class="product-list">
    <h2>Product List</h2>
  <div v-for="product in products" :key=" product.id" class="product">
    <p>{{ product.name }}</p>
    <p>{{ product.price }}</p>
    <button @click="addtoCard(product)">Add to Cart</button>
    </div>
  </div>
</div>
</template>
