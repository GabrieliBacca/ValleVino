import { createStore } from 'vuex'
import mutations from './mutations.js'; // Importe as mutações definidas
/* eslint-disable */

import { getAuthToken, login, logout } from './AuthService'; // Importe as funções necessárias do AuthService




const state = {
  user: null,
  isAuthenticated: !!getAuthToken(),
  wines: [], // Add wines to the top-level state
  cart: [],
  cartTotal: 0,
}

const mutationss = {
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
  state,
  mutations: mutationss,
  actions,
  modules: {},
});

//   state: {
//     user: null,
//     isAuthenticated: !!getAuthToken(),
//     wines: [], // Add wines to the top-level state
//     cart: [],
//     cartTotal: 0,
//   },
//   mutations: {
//     setUser(state, user) {
//       state.user = user;
//     },
//     setAuthenticated(state, isAuthenticated) {
//       state.isAuthenticated = isAuthenticated;
//     },
//     setWines(state, wines) {
//       state.wines = wines;
//     },

//     async initialiseStore(state) {
//       if (localStorage.getItem('cart')) {
//         state.cart = JSON.parse(localStorage.getItem('cart'))
//       }
//       if (localStorage.getItem('cartTotal')) {
//         state.cartTotal = parseFloat(localStorage.getItem('cartTotal'))
//       }
//       return true;
//     },
//     addRemoveCart(state, payload) {

//       //add or remove item
//       payload.toAdd ?
//         state.cart.push(payload.product) :
//         state.cart = state.cart.filter(function (obj) {
//           return obj.id !== payload.product.id;
//         });

//       //calculating the total
//       state.cartTotal = state.cart.reduce((accumulator, object) => {

//         return parseFloat(accumulator) + parseFloat(object.price * object.qty);
//       }, 0);

//       //saving in web storage
//       localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal));
//       localStorage.setItem('cart', JSON.stringify(state.cart));
//     },
//     updateCart(state, payload) {
//       //update quantity
//       state.cart.find(o => o.id === payload.product.id).qty = payload.product.qty;

//       //calculating the total
//       state.cartTotal = state.cart.reduce((accumulator, object) => {
//         return parseFloat(accumulator) + parseFloat(object.price * object.qty);
//       }, 0);

//       //saving in web storage
//       localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal));
//       localStorage.setItem('cart', JSON.stringify(state.cart));
//     },
//   },
//   actions: {
//     login({ commit }, { username, password }) {
//       // Call the login function from AuthService
//       return login(username, password)
//         .then(() => {
//           commit('setAuthenticated', true);
//           // Fetch and set the user information
//           // You can also store the user information in the Vuex store
//         });
//     },
//     logout({ commit }) {
//       // Call the logout function from AuthService
//       logout();
//       commit('setAuthenticated', false);
//       commit('setUser', null);
//     },

//     async fetchWines({ commit }) {
//       try {
//         const response = await fetch('http://localhost:8000/api/wines');
//         const data = await response.json();
//         commit('setWines', data);
//       } catch (error) {
//         commit('setError', error);
//       }
//     },
//   },
//   actions: {},
//   modules: {},
// });
