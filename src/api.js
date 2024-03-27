// src/api.js
import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data.products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};
