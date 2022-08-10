import { API_DBC } from "../../api";

export const GetPessoas = async (dispatch) => {
  try {
    const { data } = await API_DBC.get(`/pessoa?pagina=0&tamanhoDasPaginas=100`);
    dispatch({
      type: "GET_PESSOAS",
      pessoas: data.content,
    });
  } catch (error) {
    alert(error);
  }
};

export const handleDelete = async (idPessoa, dispatch) => {
  try {
    await API_DBC.delete(`pessoa/${idPessoa}`);
    dispatch({
      type: "DELETE_PESSOA",
      removido: idPessoa,
    });
  } catch (error) {
    alert(error);
  }
};

export const handleNewPessoa = async (values, navigate) => {
  try {
    await API_DBC.post(`pessoa`, values);
    navigate(-1);
  } catch (error) {
    alert(error);
  }
};

export const getPessoaById = async (id, dispatch, formik) => {
  try {
    const { data } = await API_DBC.get(`/pessoa/lista-completa?idPessoa=${id}`);
    formik.setFieldValue("nome", data[0].nome);
    formik.setFieldValue("cpf", data[0].cpf);
    formik.setFieldValue("dataNascimento", data[0].dataNascimento);
    formik.setFieldValue("email", data[0].email);
    dispatch({
      type: "GET_PESSOA_BY_ID",
      pessoa: data[0],
    });
  } catch (error) {
    alert(error);
  }
};

export const handleEditPessoa = async (id, values, navigate) => {
  try {
    await API_DBC.put(`/pessoa/${id}`, values);
    navigate(-1);
  } catch (error) {
    alert(error);
  }
};
