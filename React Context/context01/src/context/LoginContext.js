import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [logado, setLogado] = useState(false);
  const navigate = useNavigate();

  const login = async (user) => {
    try {
      const { data } = await api.post("/auth", user);
      localStorage.setItem("token", data);
      navigate("/users");
    } catch (error) {
      console.log("catch", error);
    }
  };

  return (
    <LoginContext.Provider value={{ login, logado, setLogado }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
