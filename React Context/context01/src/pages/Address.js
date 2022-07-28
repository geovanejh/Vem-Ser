import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { cepApi } from "../api";

const Address = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [endereco, setEndereco] = useState({});

  const GetData = async (props) => {
    console.log("aqui=>", props);
    if (props.values.cep.length === 8) {
      try {
        const { data } = await cepApi.get(`${props.values.cep}/json/`);
        if (data.erro) {
          alert(`Cep não encontrado.`);
          setEndereco({ rua: "", bairro: "", cidade: "", estado: "" });
        } else {
          setEndereco({
            rua: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf,
          });
        }
      } catch (error) {
        alert(`Um erro aconteceu.`);
      }
    }
  };

  return (
    <Formik
      initialValues={{
        cep: "",
        rua: endereco.rua,
        bairro: endereco.bairro,
        cidade: endereco.cidade,
        estado: endereco.estado,
      }}
      onSubmit={(values) => {}}
    >
      {(props) => (
        <Form>
          <label htmlFor="cep">CEP</label>
          <Field name="cep" onBlur={() => GetData(props)} />
          <label htmlFor="rua">Rua</label>
          <Field name="rua" value={endereco.rua} />
          <label htmlFor="bairro">Bairro</label>
          <Field name="bairro" value={endereco.bairro} />
          <label htmlFor="cidade">Cidade</label>
          <Field name="cidade" value={endereco.cidade} />
          <label htmlFor="estado">Estado</label>
          <Field name="estado" value={endereco.estado} />

          <button type="submit">Cadastrar endereço</button>
        </Form>
      )}
    </Formik>
  );
};
export default Address;
