import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
baseURL:"https://jsonplaceholder.typicode.com/users",
});

export default api;