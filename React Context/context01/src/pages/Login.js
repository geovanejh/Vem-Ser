import { useFormik } from "formik";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { handleLogin, logado, setLogado } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      login: "",
      senha: "",
    },
    onSubmit: (values) => {
      handleLogin(values);
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
