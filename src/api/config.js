import axios from 'axios';

//api/config.js
const API_URL = "http://localhost:3002"

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;