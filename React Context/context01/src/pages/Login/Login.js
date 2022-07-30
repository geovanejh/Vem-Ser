import { useFormik } from "formik";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { LoginForm, LoginPage, LoginContainer } from "./Login.style";
import logo from "../../assets/logo.svg";
import { Button } from "../../components/Button/Button.styled";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      login: "",
      senha: "",
    },
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  return (
    <LoginPage>
      <LoginContainer>
        <img src={logo} alt="" />
        <h3>People Dashboard</h3>
        <h2>Entre na sua conta </h2>
        <h5>Digite seu login e senha abaixo</h5>
        <LoginForm onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="login">login: </label>
            <input
              id="login"
              name="login"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.login}
              placeholder="Email address"
            />
          </div>
          <div>
            <div>
              <label htmlFor="senha">Password: </label>
            </div>
            <input
              id="senha"
              name="senha"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.senha}
              placeholder="Password"
            />
          </div>
          <Button primary type="submit">
            Log In
          </Button>
        </LoginForm>
        <h5>
          Não possui uma conta?
          <a href="#" onClick={() => navigate("/users")}>
            <span>Registre-se</span>
          </a>
        </h5>
      </LoginContainer>
    </LoginPage>
  );
};
export default Login;
