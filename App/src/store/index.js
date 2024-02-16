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
import { getAuthToken, login, logout } from '../pages/Login/authService.js'; // Importe as funções necessárias do AuthService


const state = {
  user: null,
  isAuthenticated: !!getAuthToken(),
  wines: [], // Add wines to the top-level state
  cart: [],
  cartTotal: 0,
}

const mutations = {
  setWines(state, wines) {
    state.wines = wines;
  },
  setUser(state, user) {
    state.user = user;
  },
  setAuthenticated(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated;
  },
  initialiseStore(state) {
    if (localStorage.getItem('cart')) {
      state.cart = JSON.parse(localStorage.getItem('cart'))
    }
    if (localStorage.getItem('cartTotal')) {
      state.cartTotal = parseFloat(localStorage.getItem('cartTotal'))
    }
    return true;
  },
  addRemoveCart(state, payload) {
    // Código para adicionar ou remover item do carrinho
    payload.toAdd ?
      state.cart.push(payload.product) :
      state.cart = state.cart.filter(function (obj) {
        return obj.id !== payload.product.id;
      });
    //calculating the total
    state.cartTotal = state.cart.reduce((accumulator, object) => {

      return parseFloat(accumulator) + parseFloat(object.price * object.qty);
    }, 0);

    //saving in web storage
    localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal));
    localStorage.setItem('cart', JSON.stringify(state.cart));
  },
  updateCart(state, payload) {
    //update quantity 
    state.cart.find(o => o.id === payload.product.id).qty = payload.product.qty;

    //calculating the total
    state.cartTotal = state.cart.reduce((accumulator, object) => {
      return parseFloat(accumulator) + parseFloat(object.price * object.qty);
    }, 0);

    //saving in web storage
    localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal));
    localStorage.setItem('cart', JSON.stringify(state.cart));
  },
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
  },
  login({ commit }, { username, password }) {
    return login(username, password)
      .then(() => {
        commit('setAuthenticated', true);
        // Fetch and set the user information
        // You can also store the user information in the Vuex store
      });
  },
  logout({ commit }) {
    logout();
    commit('setAuthenticated', false);
    commit('setUser', null);
  },

}

export default createStore({
  state: {
    wines: [],
    cart: [],
    cartTotal: 0
  },
  mutations,
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