import axios from "axios";

export default axios.create({
  baseURL: "https://dbc-pessoa-api.herokuapp.com",
});
