import { useNavigate, useParams } from "react-router-dom";
import { FormContainer } from "../components/Forms/FormContainer";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import { getContatoById, handleEditContato, handleNewContato } from "../store/actions/ContatoActions";
import { connect } from "react-redux";

const ContatoForm = ({ dispatch }) => {
  const navigate = useNavigate();
  const { idPessoa, idContato } = useParams();

  const setup = async () => {
    if (idContato) {
      getContatoById(idContato, dispatch, formik);
    }
  };

  useEffect(() => {
    setup();
  }, []);

  const formik = useFormik({
    initialValues: {
      tipoContato: "",
      telefone: "",
      descricao: "",
    },
    validationSchema: Yup.object({
      tipoContato: Yup.string().required("- Obrigatório.").min(1, "- Obrigatório"),
      telefone: Yup.string().required("- Obrigatório."),
    }),
    onSubmit: (values) => {
      const newObj = {};
      idContato ? handleEditContato(idContato, values, navigate) : handleNewContato(idPessoa, values, navigate);
    },
  });
  return (
    <FormContainer>
      <ContactForm formik={formik} />
    </FormContainer>
  );
};
export default connect()(ContatoForm);
