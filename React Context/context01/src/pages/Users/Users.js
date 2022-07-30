import * as Yup from "yup";
import { useContext, useState } from "react";
import { useFormik } from "formik";
import { AuthContext } from "../../context/AuthContext";
import { LoginContainer, LoginPage, LoginForm } from "../Login/Login.style";
import { Button } from "../../components/Button/Button.styled";
import logo from "../../assets/logo.svg";
import FormField from "../../components/FormField/FormField";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const { handleRegister, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      login: "",
      senha: "",
      confirmaSenha: "",
    },
    onSubmit: (values) => {
      handleRegister({
        login: values.login,
        senha: values.senha,
      });
    },
  });

  return loading ? (
    <Loading />
  ) : (
    <LoginPage>
      {loading && <Loading />}
      <LoginContainer>
        <img src={logo} alt="" />
        <h3>People Dashboard</h3>
        <h2>Registre sua conta</h2>
        <LoginForm onSubmit={formik.handleSubmit}>
          <FormField
            label="login"
            id="login"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.login}
            placeholder="Login"
          />
          <FormField
            label="Senha"
            id="senha"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.senha}
            placeholder="Senha"
          />
          <FormField
            label="Confirmar senha"
            id="confirmaSenha"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmaSenha}
            placeholder="Confirmar senha"
          />
          <Button primary type="submit">
            Register
          </Button>
        </LoginForm>
        <h5>
          Já possui uma conta?
          <a href="#" onClick={() => navigate("/")}>
            <span>Login</span>
          </a>
        </h5>
      </LoginContainer>
    </LoginPage>
  );
};
export default Users;
