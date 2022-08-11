import { connect } from "react-redux";
import * as LoginActions from "../store/actions/AuthActions";
import { useNavigate } from "react-router-dom";
import { AuthPage } from "../components/AuthPages/AuthPage";
import { AuthContainer } from "../components/AuthPages/AuthContainer";
import logo from "../assets/logo.svg";
import { useFormik } from "formik";
import { AuthForm } from "../components/AuthPages/AuthForm";
import FormField from "../components/Forms/FormField/FormField";
import { Button } from "../components/Button/Button.styled";

const Login = ({ dispatch }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      login: "",
      senha: "",
    },
    onSubmit: (values) => {
      LoginActions.handleLogin(values, dispatch, navigate);
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
          <a onClick={() => navigate("/users")}>
            <span>Registre-se</span>
          </a>
        </h5>
      </AuthContainer>
    </AuthPage>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Login);
