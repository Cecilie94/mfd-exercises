<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Navbar from "../components/Navbar.vue";
import { useProductStore } from "../stores/products.js";

const store = useProductStore();

const products = store.products;
</script>

<!-- ProductList.vue -->
<template>
  <Navbar />
  <div class="product-list">
    <h2>Product List</h2>
    <div v-for="product in products" :key="product.id" class="product">
      <p>{{ product.name }}</p>
      <p>{{ product.price }}</p>
      <!-- Link til det enkelte produkt -->
      <router-link :to="{ name: 'productDetail', params: { id: product.id } }">
        View Product
      </router-link>
    </div>
  </div>
</template>
