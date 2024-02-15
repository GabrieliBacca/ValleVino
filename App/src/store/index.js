// import { createStore } from "vuex";
// // import rootMutations from "./mutation.js";
// import rootActions from "./action.js";
// import rootGetters from "./getters.js";
// import axios from 'axios';
// // import { createRouter, createWebHistory } from "vue-router";
// import AllProducts from "../components/AllProducts.vue";
// import mutations from './mutation.js'

// const mutations = {
//   setWines(state, wines) {
//     state.wines = wines;
//   }
// }

// const store = createStore({
//   state() {
//     return {
//       cart: [],
//       total: 0,
//       qty: 0,
//       products: [],
//     };
//   },
//   mutations: rootMutations,
//   actions: rootActions,
//   getters: rootGetters,
//   actions: {
//     async fetchProducts({ commit }) {
//       try {
//         const response = await axios.get('http://localhost:8000/api/wines');
//         commit('setProducts', response.data);
//       } catch (error) {
//         // Lidar com erros de requisição
//         console.error('Error fetching products:', error);
//       }
//     }
//   }
// });


// export default store


/* eslint-disable */

import { createStore } from "vuex";
import rootActions from "./action.js";
import rootGetters from "./getters.js";
import axios from 'axios';

const state = {
  wines: []
}

const mutations = {
  setWines(state, wines) {
    state.wines = wines;
  }
}

const actions = {
  async fetchWines({ commit }) {
    try {
      const response = await fetch('http://localhost:8000/api/wines');
      const data = await response.json();
      commit('setWines', data);
    } catch (error) {
      commit('setError', error);
    }
  }
}

export default createStore({
  state: {
    wines: [],
    cart: [],
    cartTotal: 0
  },
  mutations: {
    setWines(state, wines) {
      state.wines = wines;
    },
    addRemoveCart(state, payload) {
      // implementação do método addRemoveCart
    },
    updateCart(state, payload) {
      // implementação do método updateCart
    }
  },
  actions: {
    async initialiseStore({ state }) {
      if (localStorage.getItem('cart')) {
        state.cart = JSON.parse(localStorage.getItem('cart'))
      }
      if (localStorage.getItem('cartTotal')) {
        state.cartTotal = parseFloat(localStorage.getItem('cartTotal'))
      }
      return true;
    },
    // outras definições de actions
  },
  modules: {
    // outras definições de módulos, se houver
  }
});