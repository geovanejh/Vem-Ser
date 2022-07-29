import { useFormik } from "formik";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { LoginForm, LoginPage, LoginContainer } from "./Login.style";
import logo from "../../assets/logo.svg";
import { Button } from "../../components/Button/Button.styled";

const Login = () => {
  const { handleLogin } = useContext(AuthContext);

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
        <h3>Dashboard Kit</h3>
        <h2>Log In to Dashboard Kit</h2>
        <h5>Enter your email and password below</h5>
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
              <small>
                <a href="#">Forgot password?</a>
              </small>
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
          Don’t have an account?
          <a href="#">
            <span>Sign up</span>
          </a>
        </h5>
      </LoginContainer>
    </LoginPage>
  );
};
export default Login;
