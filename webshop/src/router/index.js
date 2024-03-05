import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../views/ProductList.vue";
import SingleProduct from "../views/SingleProduct.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ProductList,
    },
    {
      path: "/product",
      name: "product",
      component: SingleProduct,
    },
  ],
});

export default router;
