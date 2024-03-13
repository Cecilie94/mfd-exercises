// store.js
import { defineStore } from "pinia";

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    products: [
      {
        id: 1,
        name: "Nike Dunk Panda",
        description:
          "Inspired by the adorable panda, these Nike Dunk sneakers combine style and comfort seamlessly. Featuring a sleek black and white design with subtle panda motifs, these shoes are perfect for both casual outings and athletic endeavors. Step out in style and make a statement with every stride in the Nike Dunk Panda shoes.",
        price: 30,
        sizes: ["36", "37", "38", "39", "40"],
        colors: ["Black", "White"],
        quantity: 1450,
      },
      {
        id: 2,
        name: "Nike Jordan 1",
        description:
          "The iconic Nike Jordan 1 shoes are a timeless classic, exuding retro style with a modern edge. Crafted with premium materials and innovative technology, these sneakers offer unparalleled comfort and support. Whether you're hitting the court or the streets, the Nike Jordan 1 shoes will elevate your look and performance effortlessly.",
        price: 30,
        sizes: ["36", "37", "38", "39", "40"],
        colors: ["Black", "White", "Navy", "Red"],
        quantity: 780,
      },
      {
        id: 3,
        name: "Sketcher Sports",
        description:
          "Experience ultimate comfort and versatility with the Sketcher sneakers. Designed for the modern individual on the go, these shoes feature a lightweight construction and cushioned footbed for all-day wearability. With a sleek black and white colorway, the Sketcher sneakers effortlessly complement any outfit, making them a must-have addition to your footwear collection.",
        price: 30,
        sizes: ["36", "37", "38", "39", "40"],
        colors: ["Black", "Navy", "Taupe"],
        quantity: 955,
      },
    ],
  }),

  getters: {
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === id);
    },
    //getter henter produktet ud fra id
  },
});
