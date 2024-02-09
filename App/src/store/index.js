import { createStore } from "vuex";
import rootMutations from "./mutation.js";
import rootActions from "./action.js";
import rootGetters from "./getters.js";
import axios from 'axios';
// import { createRouter, createWebHistory } from "vue-router";
import AllProducts from "../components/AllProducts.vue";

const store = createStore({
  state() {
    return {
      cart: [],
      total: 0,
      qty: 0,
      products: [],
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get('http://localhost:8000/api/wines');
        commit('setProducts', response.data);
      } catch (error) {
        // Lidar com erros de requisição
        console.error('Error fetching products:', error);
      }
    }
  }
});

export default store