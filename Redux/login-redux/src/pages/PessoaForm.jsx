import { useFormik } from "formik";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FormContainer } from "../components/Forms/FormContainer";
import PeopleForm from "../components/PeopleForm/PeopleForm";
import { getPessoaById, handleEditPessoa, handleNewPessoa } from "../store/actions/PessoaActions";
import * as Yup from "yup";
import Loading from "../components/Loading/Loading";

const PessoaForm = ({ dispatch, loading }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setup();
  }, []);

  const setup = async () => {
    if (id) {
      getPessoaById(id, dispatch, formik);
    }
  };

  const formik = useFormik({
    initialValues: {
      nome: "",
      cpf: "",
      email: "",
      dataNascimento: "",
    },
    validationSchema: Yup.object({
      nome: Yup.string().min(3, "- O nome deve ter mais de 2 caracteres.").required("- Obrigatório"),
      cpf: Yup.string().min(14, "- Curto demais.").required("- Obrigatório"),
      email: Yup.string().required("- Obrigatório").email("Email inválido."),
      dataNascimento: Yup.string().min(10, "- Curto demais.").required("- Obrigatório"),
    }),
    onSubmit: (values) => {
      id ? handleEditPessoa(id, values, navigate) : handleNewPessoa(values, navigate);
    },
  });

  return loading ? (
    <Loading />
  ) : (
    <FormContainer>
      <PeopleForm formik={formik} id={id} />
    </FormContainer>
  );
};

const mapStateToProps = (state) => ({
  pessoa: state.PessoaReducer.pessoa,
  loading: state.UtilsReducer.loading,
});

export default connect(mapStateToProps)(PessoaForm);
