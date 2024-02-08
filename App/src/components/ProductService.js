import axios from 'axios';

export const ProductService = {
    async getProductsData() {
        const response = await axios.get('http://localhost:8000/api/wines');
        return response.data.map(wine => ({
            id: wine.id,
            name: wine.label,
            category: wine.type,
            description: wine.description, // Assuming type is the description
            img: wine.img,
            price: wine.price,
            category: 'Wine',
            quantity: wine.quantity, // You may need to update this based on the actual data
            inventoryStatus: 'INSTOCK', // You may need to update this based on the actual data
            review: wine.review,// You may need to update this based on the actual data
        }));
    },

    async getProductsWithOrdersData() {
        const response = await axios.get('http://localhost:8000/api/wines');
        return response.data.map(wine => ({
            id: wine.id,
            name: wine.label,
            category: wine.type,
            description: wine.description, // Assuming type is the description
            img: wine.img,
            price: wine.price,
            category: 'Wine',
            quantity: wine.quantity, // You may need to update this based on the actual data
            inventoryStatus: 'INSTOCK', // You may need to update this based on the actual data
            review: wine.review, // You may need to update this based on the actual data
            orders: [] // You may need to update this based on the actual data
        }));
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }

}
