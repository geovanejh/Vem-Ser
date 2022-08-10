import { API_DBC } from "../../api";

export async function handleLogin(login, senha, dispatch, navigate) {
  try {
    const { data } = await API_DBC.post("/auth", { login, senha });
    localStorage.setItem("token", data);
    API_DBC.defaults.headers.common["Authorization"] = data;
    dispatch({
      type: "SET_LOGIN",
      token: data,
      isLogged: true,
      isLoading: false,
    });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
}

export function isAuth(dispatch) {
  const token = localStorage.getItem("token");
  if (token) {
    API_DBC.defaults.headers.common["Authorization"] = token;
    console.log("token:", token);
    dispatch({
      type: "SET_LOGIN",
      token: token,
      isLogged: true,
      isLoading: false,
    });
  } else {
    dispatch({
      type: "SET_LOGIN",
      token: "",
      isLogged: "false",
      isLoading: false,
    });
  }
}
