import axios from "axios";

export const API_DBC = axios.create({
  baseURL: "https://dbc-pessoa-api.herokuapp.com",
});
