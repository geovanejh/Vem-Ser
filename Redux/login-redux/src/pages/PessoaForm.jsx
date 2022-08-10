import { useFormik } from "formik";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getPessoaById, handleEditPessoa, handleNewPessoa } from "../store/actions/PessoaActions";

const PessoaForm = ({ dispatch }) => {
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
    onSubmit: (values) => {
      id ? handleEditPessoa(id, values, navigate) : handleNewPessoa(values, navigate);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="nome">nome</label>
      <input id="nome" name="nome" type="text" onChange={formik.handleChange} value={formik.values.nome} />
      <label htmlFor="cpf">Last Name</label>
      <input id="cpf" name="cpf" type="text" onChange={formik.handleChange} value={formik.values.cpf} />
      <label htmlFor="email">Email Address</label>
      <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
      <label htmlFor="dataNascimento">dataNascimento</label>
      <input
        id="dataNascimento"
        name="dataNascimento"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.dataNascimento}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  pessoa: state.PessoaReducer.pessoa,
});

export default connect(mapStateToProps)(PessoaForm);
