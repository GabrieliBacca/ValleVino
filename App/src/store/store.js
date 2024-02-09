const { createStore } = require("vuex");

const store = createStore({
  modules: {
    auth,
  },
});

export default store;
