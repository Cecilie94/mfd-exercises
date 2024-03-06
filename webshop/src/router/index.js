// router.js
import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../views/ProductList.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Cart from "../components/Cart.vue"; //
import AdminView from "../views/AdminView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ProductList,
    },
    {
      path: "/product/:id", // Tilføj en dynamisk ruteparameter for produktets id
      name: "singleproduct",
      component: SingleProduct,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminView,
    },
  ],
});

export default router;
