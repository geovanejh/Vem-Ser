import axios from "axios";

export const API_DBC = axios.create({
  baseURL: "https://dbc-pessoa-api.herokuapp.com",
});

export const cepApi = axios.create({
  baseURL: "https://viacep.com.br/ws",
});
