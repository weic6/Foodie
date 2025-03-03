import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const getMenuItems = () => {
  return axios.get(`${API_URL}/menu`);
};

export const getMenuItemsByCategory = (category) => {
  return axios.get(`${API_URL}/menu/category/${category}`);
};

export const createOrder = (order) => {
  return axios.post(`${API_URL}/orders`, order);
};

export const getOrdersByUserId = (userId) => {
  return axios.get(`${API_URL}/orders/user/${userId}`);
};

export const getOrderById = (id) => {
  return axios.get(`${API_URL}/orders/${id}`);
};
