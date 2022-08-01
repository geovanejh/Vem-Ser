import { useFormik } from "formik";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../assets/logo.svg";
import { Button } from "../../components/Button/Button.styled";
import { useNavigate } from "react-router-dom";
import FormField from "../../components/Form/FormField/FormField";
import { AuthPage } from "../../components/AuthPages/AuthPage";
import { AuthContainer } from "../../components/AuthPages/AuthContainer";
import { AuthForm } from "../../components/AuthPages/LoginForm";

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
    <AuthPage>
      <AuthContainer>
        <img src={logo} alt="" />
        <h3>People Dashboard</h3>
        <h2>Entre na sua conta </h2>
        <h5>Digite seu login e senha abaixo</h5>
        <AuthForm onSubmit={formik.handleSubmit}>
          <FormField
            id="login"
            type="text"
            label="Login"
            onChange={formik.handleChange}
            value={formik.values.login}
            onBlur={formik.handleBlur}
            formik={formik}
            placeholder="Login"
          />
          <FormField
            id="senha"
            type="password"
            label="Senha"
            onChange={formik.handleChange}
            value={formik.values.senha}
            onBlur={formik.handleBlur}
            formik={formik}
            placeholder="Senha"
          />
          <Button primary type="submit">
            Log In
          </Button>
        </AuthForm>
        <h5>
          Não possui uma conta?
          <a href="#" onClick={() => navigate("/users")}>
            <span>Registre-se</span>
          </a>
        </h5>
      </AuthContainer>
    </AuthPage>
  );
};
export default Login;
