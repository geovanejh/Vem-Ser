import { useFormik } from "formik";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const Login = () => {
  const { login, logado, setLogado } = useContext(LoginContext);

  const formik = useFormik({
    initialValues: {
      login: "",
      senha: "",
    },
    onSubmit: (values) => {
      login(values);
      setLogado(true);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="login">login: </label>
      <input
        id="login"
        name="login"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.login}
      />
      <label htmlFor="senha">Senha: </label>
      <input
        id="senha"
        name="senha"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.senha}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Login;
