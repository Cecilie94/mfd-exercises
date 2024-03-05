<template>
  <div>
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const productId = router.currentRoute.value.params.id; // Hent produktets id fra ruten

const products = ref([
  { id: 1, name: 'Nike Dunk Panda', description: 'Description for Nike Dunk Panda' },
  { id: 2, name: 'Nike Jordan 1', description: 'Description for Nike Jordan 1' },
  { id: 3, name: 'Sketcher', description: 'Description for Sketcher' }
]);

// Filtrer produktet baseret på id
const product = products.value.find(item => item.id === Number(productId));
</script>
