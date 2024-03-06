<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Navbar from "../components/Navbar.vue";

const products = ref([
  {
    id: 1,
    name: "Nike Dunk Panda",
    price: 10,
    stockQuantity: 5,
    inStock: true,
  },
  { id: 2, name: "Nike Jordan 1", price: 2, stockQuantity: 20, inStock: true },
  { id: 3, name: "Sketcher", price: 30, stockQuantity: 0, inStock: false },
]);

const inStockProducts = products.value.filter((product) => product.inStock);
const soldOutProducts = products.value.filter((product) => !product.inStock);
</script>

<template>
  <Navbar />

  <div>
    <h1>Admin Overview</h1>
    <h2>In Stock</h2>
    <ul>
      <li v-for="product in inStockProducts" :key="product.id">
        <strong>ID:</strong> {{ product.id }} | <strong>Name:</strong>
        {{ product.name }} | <strong>Price:</strong> ${{ product.price }} |
        <strong>Stock Quantity:</strong> {{ product.stockQuantity }}
      </li>
    </ul>
    <h2>Sold Out</h2>
    <ul>
      <li v-for="product in soldOutProducts" :key="product.id">
        <strong>ID:</strong> {{ product.id }} | <strong>Name:</strong>
        {{ product.name }} | <strong>Price:</strong> ${{ product.price }} |
        <strong>Stock Quantity:</strong> {{ product.stockQuantity }}
      </li>
    </ul>
  </div>
</template>
