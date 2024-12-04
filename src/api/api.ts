import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/json/',
});

export const getCurrency = async () => {
  const response = await api.get('all');
  return response.data;
};

export const getConversion = async (from: string, amount: string) => {
  const response = await api.get(`${from}-BRL/${amount}`);
  console.log(response.data[0].ask);
  return response.data;
};
