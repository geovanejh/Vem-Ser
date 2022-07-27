import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersApi } from "../api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [logado, setLogado] = useState(false);
  const navigate = useNavigate();

  const verificaLogado = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return true;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleRegister = async (user) => {
    try {
      const { data } = await usersApi.post("/auth/create", user);
      alert(`Usuário criado com sucesso.`);
    } catch (error) {
      console.log("error => ", error);
    }
  };

  const handleLogin = async (user) => {
    try {
      const { data } = await usersApi.post("/auth", user);
      localStorage.setItem("token", data);
      navigate("/people");
    } catch (error) {
      console.log("catch", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        logado,
        setLogado,
        verificaLogado,
        handleRegister,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
