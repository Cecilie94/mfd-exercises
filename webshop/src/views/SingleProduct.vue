<script setup></script>

<template>
  <div>
    <h1>This is a single product page</h1>
    <h1>{{ product.name }}</h1>
    <p>Price: ${{ product.price }}</p>
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<style></style>
