import AddressForm from "../components/AddressForm/AddressForm";
import * as Yup from "yup";
import { useFormik } from "formik";
import { FormContainer } from "../components/Forms/FormContainer";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getPessoaById } from "../store/actions/PessoaActions";
import { connect } from "react-redux";
import { getEnderecoById, handleEditEndereco, handleNewEndereco } from "../store/actions/EnderecoActions";

const EnderecoForm = ({ dispatch, pessoa, endereco }) => {
  const navigate = useNavigate();
  const { idPessoa, idEndereco } = useParams();

  useEffect(() => {
    idPessoa ? getPessoaById(idPessoa, dispatch) : getEnderecoById(idEndereco, dispatch, formik);
  }, []);

  const formik = useFormik({
    initialValues: {
      cep: "",
      rua: "",
      bairro: "",
      cidade: "",
      estado: "",
      numero: "",
      complemento: "",
    },
    validationSchema: Yup.object({
      cep: Yup.string().min(9, "- Formato incorreto.").max(9, "- Formato incorreto.").required("- Obrigatório."),
      rua: Yup.string().max(40, "- Longo demais.").required("- Obrigatório."),
      numero: Yup.string().required("- Obrigatório."),
      bairro: Yup.string().required("- Obrigatório."),
      cidade: Yup.string().required("- Obrigatório."),
      estado: Yup.string().required("- Obrigatório."),
    }),
    onSubmit: (values) => {
      const newObj = {
        cep: values.cep.replace("-", ""),
        logradouro: values.rua,
        numero: values.numero,
        complemento: `Bairro ${values.bairro}, ${values.complemento}`,
        cidade: values.cidade,
        estado: values.estado,
        pais: "Brasil",
        tipo: "RESIDENCIAL",
      };

      idPessoa ? handleNewEndereco(pessoa.idPessoa, newObj, navigate) : handleEditEndereco(endereco, newObj, navigate);
    },
  });

  return (
    <div>
      <FormContainer>
        <AddressForm formik={formik} />
      </FormContainer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pessoa: state.PessoaReducer.pessoa,
  loading: state.UtilsReducer.loading,
  endereco: state.EnderecoReducer.endereco,
});

export default connect(mapStateToProps)(EnderecoForm);
