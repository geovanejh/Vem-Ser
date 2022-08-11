import { API_DBC } from "../../api";

export const handleLogin = async (values, dispatch, navigate) => {
  try {
    const { data } = await API_DBC.post("/auth", values);
    localStorage.setItem("token", data);
    API_DBC.defaults.headers.common["Authorization"] = data;
    dispatch({
      type: "SET_LOGIN",
      token: data,
      isLogged: true,
      isLoading: false,
    });
    navigate("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

export const handleLogout = (dispatch, navigate) => {
  localStorage.removeItem("token");
  delete API_DBC.defaults.headers.common["Authorization"];
  dispatch({
    type: "SET_LOGOUT",
  });
  navigate("/login");
};

export const isAuth = async (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    API_DBC.defaults.headers.common["Authorization"] = token;
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
};
