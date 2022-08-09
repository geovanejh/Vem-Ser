import { API_DBC } from "../../api";

const api = async (login, senha) => {
  console.log(login, senha);
  try {
    const { data } = await API_DBC.post(`/auth`, { login, senha });
    return data;
  } catch (error) {
    alert(error);
  }
};

export const handleLogin = async (login, senha) => {
  const data = api(login, senha);
  return {
    type: "SET_LESSON",
    token: data,
    isLogged: true,
    isLoading: false,
  };
};
