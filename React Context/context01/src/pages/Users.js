import * as Yup from "yup";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { Formik, Form, Field } from "formik";
import { AuthContext } from "../context/AuthContext";

const Users = () => {
  const { handleRegister } = useContext(AuthContext);

  return (
    <Formik
      initialValues={{
        login: "",
        senha: "",
      }}
      onSubmit={(values) => {
        handleRegister(values);
      }}
      validationSchema={Yup.object({
        login: Yup.string()
          .min(4, "É necessário ao menos 4 digitos no login")
          .max(15, "O login não pode ter mais de 15 digitos.")
          .required("O login é obrigatório."),
        senha: Yup.string()
          .min(8, "A senha precisa ter ao menos 8 caracteres")
          .max(20, "A senha não pode ter mais de 20 caracteres")
          .required("A senha é obrigatória."),
      })}
    >
      {(formik) => (
        <Form>
          Cadastrar usuário: <br />
          <label htmlFor="login">Login:</label>
          <Field name="login" />
          {formik.touched.login && formik.errors.login ? (
            <div>{formik.errors.login}</div>
          ) : null}
          <br />
          <label htmlFor="senha">Senha:</label>
          <Field name="senha" type="password" />
          {formik.touched.senha && formik.errors.senha ? (
            <div>{formik.errors.senha}</div>
          ) : null}
          <button type="submit">Cadastrar usuário</button>
        </Form>
      )}
    </Formik>
  );
};
export default Users;
