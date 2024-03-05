<script setup>
import ProductList from "./views/ProductList.vue";
import { useCounterStore } from "@/stores/counter";

const counter = useCounterStore();
</script>

<template>
  <ProductList/>
</template>
