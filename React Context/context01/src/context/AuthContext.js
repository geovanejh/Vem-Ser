import { createContext, useState, useEffect } from "react";
import { usersApi } from "../api";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
    delete usersApi.defaults.headers.common["Authorization"];
    navigate("/");
  };

  const handleRegister = async (user) => {
    try {
      setLoading(true);
      await usersApi.post("/auth/create", user);
      navigate("/");
    } catch (error) {
      const msg = error.response.data.message;
      toast.error(msg);
    }
    setLoading(false);
  };

  const handleLogin = async (user) => {
    try {
      setLoading(true);
      const { data } = await usersApi.post("/auth", user);
      localStorage.setItem("token", data);
      usersApi.defaults.headers.common["Authorization"] = data;
      setAuth(true);
      navigate("/people");
    } catch (error) {
      toast.error("Login ou senha incorretos.");
    }
    setLoading(false);
  };

  return loading ? (
    <Loading />
  ) : (
    <AuthContext.Provider
      value={{
        handleLogin,
        handleRegister,
        handleLogout,
        auth,
        setLoading,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
