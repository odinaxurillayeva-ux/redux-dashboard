import axios from "axios";

const API = "https://6aa40f3ee7ae868cdf7b9fa1.mockapi.io/dealport-api/order";

export const getOrders = () => axios.get(API);

export const addOrder = (order: any) => axios.post(API, order);

export const deleteOrder = (id: string) => axios.delete(`${API}/${id}`);

export const updateOrder = (id: string, order: any) =>
  axios.put(`${API}/${id}`, order);