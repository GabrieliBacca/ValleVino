// Em actions.js
import axios from 'axios';

export default {
    async fetchProducts({ commit }) {
        try {
            const response = await axios.get('http://localhost:8000/api/wines');
            commit('setProducts', response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    },
    addToCart(context, payload) {
        const prodId = payload.id;
        const products = context.rootGetters.products;
        const product = products.find((prod) => prod.id === prodId);
        context.commit("addProductToCart", product);
    },
    removeFromCart(context, payload) {
        context.commit("removeProductFromCart", payload);
    },
};
