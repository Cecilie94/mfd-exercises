<template>
  <div>
    <h1>{{ product ? product.name : '' }}</h1>
    <p>{{ product ? product.description : '' }}</p>
    <h2>hello</h2>
  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const productId = ref(null);
const products = ref([
  {
    id: 1,
    name: "Nike Dunk Panda",
    description: "Description for Nike Dunk Panda",
  },
  {
    id: 2,
    name: "Nike Jordan 1",
    description: "Description for Nike Jordan 1",
  },
  { id: 3, name: "Sketcher", description: "Description for Sketcher" },
]);

// Filtrer produktet baseret på id
const product = ref(null);

onMounted(() => {
  productId.value = router.currentRoute.value.params.id;
  product.value = products.value.find(
    (item) => item.id === Number(productId.value)
  );
});
</script>
