<script setup>
import ProductList from "./views/ProductList.vue";
import SingleProduct from "./views/SingleProduct.vue";
import { useCounterStore } from "@/stores/counter";

const counter = useCounterStore();
</script>

<template>
  <ProductList />

  <SingleProduct />

</template>
