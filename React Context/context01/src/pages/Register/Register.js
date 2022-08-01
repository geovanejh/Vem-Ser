import * as Yup from "yup";
import { useContext } from "react";
import { useFormik } from "formik";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "../../components/Button/Button.styled";
import logo from "../../assets/logo.svg";
import FormField from "../../components/Form/FormField/FormField";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { AuthPage } from "../../components/AuthPages/AuthPage";
import { AuthContainer } from "../../components/AuthPages/AuthContainer";
import { AuthForm } from "../../components/AuthPages/LoginForm";

const Users = () => {
  const { handleRegister, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  Yup.addMethod(Yup.string, "senhaIgual", function (errorMessage) {
    return this.test(`test-password-equals`, errorMessage, function (value) {
      const { path, createError } = this;

      return value === formik.values.senha || createError({ path, message: errorMessage });
    });
  });

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
    validationSchema: Yup.object({
      login: Yup.string().min(3, "- O login deve ter mais de 2 caracteres.").required("- Obrigatório"),
      senha: Yup.string().min(8, "- Curto demais.").required("- Obrigatório"),
      confirmaSenha: Yup.string().senhaIgual("As senhas digitadas são diferentes"),
    }),
  });

  return loading ? (
    <Loading />
  ) : (
    <AuthPage>
      {loading && <Loading />}
      <AuthContainer>
        <img src={logo} alt="" />
        <h3>People Dashboard</h3>
        <h2>Registre sua conta</h2>
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
            label="Senha"
            id="senha"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.senha}
            onBlur={formik.handleBlur}
            formik={formik}
            placeholder="Senha"
          />
          <FormField
            label="Confirmar senha"
            id="confirmaSenha"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmaSenha}
            onBlur={formik.handleBlur}
            formik={formik}
            placeholder="Confirmar senha"
          />
          <Button primary type="submit">
            Register
          </Button>
        </AuthForm>
        <h5>
          Já possui uma conta?
          <a href="#" onClick={() => navigate("/")}>
            <span>Login</span>
          </a>
        </h5>
      </AuthContainer>
    </AuthPage>
  );
};
export default Users;
