import { useNavigate, useParams } from "react-router-dom";
import { FormContainer } from "../components/Forms/FormContainer";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import { getContatoById, handleEditContato, handleNewContato } from "../store/actions/ContatoActions";
import { connect } from "react-redux";
import Loading from "../components/Loading/Loading";

const ContatoForm = ({ dispatch, loading }) => {
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
      idContato ? handleEditContato(idContato, values, navigate) : handleNewContato(idPessoa, values, navigate);
    },
  });
  return loading ? (
    <Loading />
  ) : (
    <FormContainer>
      <ContactForm formik={formik} />
    </FormContainer>
  );
};

const mapStateToProps = (state) => ({
  loading: state.UtilsReducer.loading,
});

export default connect(mapStateToProps)(ContatoForm);
