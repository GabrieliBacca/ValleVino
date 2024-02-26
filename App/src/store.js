// store/index.js
import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            codigoAleatorio: null,
        };
    },
    mutations: {
        setCodigoAleatorio(state, codigo) {
            state.codigoAleatorio = codigo;
        },
    },
    actions: {
        salvarCodigoAleatorio({ commit }, codigo) {
            commit('setCodigoAleatorio', codigo);
        },
    },
    getters: {
        getCodigoAleatorio: state => state.codigoAleatorio,
    },
});