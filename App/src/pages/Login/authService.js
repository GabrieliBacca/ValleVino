// AuthService.js (for handling user authentication)

import axios from 'axios';

const TOKEN_KEY = 'jwt_token';

export function login(email, password) {
    return axios.post('http://localhost:8000/api/user', { email, password })
        .then(response => {
            const token = response.data.token;
            localStorage.setItem(TOKEN_KEY, token); // Store the JWT token in localStorage
        });
}

export function logout() {
    localStorage.removeItem(TOKEN_KEY); // Remove the JWT token from localStorage
}

export function getAuthToken() {
    return localStorage.getItem(TOKEN_KEY); // Retrieve the JWT token from localStorage
}