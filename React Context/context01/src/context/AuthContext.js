import { createContext, useState, useEffect } from "react";
import { usersApi } from "../api";
import { LoadingSpinner } from "./AuthContext.styled";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      usersApi.defaults.headers.common["Authorization"] = token;
      setAuth(true);
    }
    setLoading(false);
  }, []);

  const handleLogout = () => {
    setAuth(false);
    localStorage.removeItem("token");
    usersApi.defaults.headers.common["Authorization"] = undefined;
    window.location.href = "/";
  };

  const handleRegister = async (user) => {
    try {
      await usersApi.post("/auth/create", user);
      alert(`Usuário criado com sucesso.`);
    } catch (error) {
      console.log("error => ", error);
    }
  };

  const handleLogin = async (user) => {
    try {
      const { data } = await usersApi.post("/auth", user);
      localStorage.setItem("token", data);
      usersApi.defaults.headers.common["Authorization"] = data;
      setAuth(true);
      window.location.href = "/people";
    } catch (error) {
      console.log("catch", error);
    }
  };

  if (loading) {
    return (
      <LoadingSpinner>
        <div></div>
      </LoadingSpinner>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        handleRegister,
        handleLogout,
        auth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
