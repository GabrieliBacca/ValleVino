
// Em mutations.js
export default {
    setProducts(state, products) {
        state.products = products;
    },
    addProductToCart(state, payload) {
        const productData = payload;
        const productInCartIndex = state.cart.findIndex(
            (ci) => ci.id === productData.id
        );
        if (productInCartIndex >= 0) {
            state.cart[productInCartIndex].qty++;
        } else {
            const newItem = {
                id: productData.id,
                type: productData.type,
                label: productData.label,
                grape: productData.grape,
                img: productData.img,
                price: productData.price,
                quantity: 1,
            };
            state.cart.push(newItem);
        }
        state.qty++;
        state.total += productData.price;
    },

    removeProductFromCart(state, payload) {
        const prodId = payload.id;
        const productInCartIndex = state.cart.findIndex(
            (cartItem) => cartItem.id === prodId
        );
        const prodData = state.cart[productInCartIndex];
        state.cart.splice(productInCartIndex, 1);
        state.qty -= prodData.qty;
        state.total -= prodData.price * prodData.qty;
    },
};

