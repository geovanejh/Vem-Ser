import { API_DBC } from "../../api";

export const handleNewContato = async (idPessoa, values, navigate) => {
  try {
    await API_DBC.post(`/contato/${idPessoa}`, values);
    navigate(-1);
  } catch (error) {
    alert(error);
  }
};

export const getContatoById = async (idContato, dispatch, formik) => {
  try {
    const { data } = await API_DBC.get(`/contato`);
    const filtrei = data.filter((e) => e.idContato == idContato);
    if (formik) {
      formik.setFieldValue("tipoContato", filtrei.tipoContato);
      formik.setFieldValue("telefone", filtrei[0].telefone);
      formik.setFieldValue("descricao", filtrei[0].descricao);
    }

    dispatch({
      type: "GET_CONTATO_BY_ID",
      contato: filtrei,
    });
  } catch (error) {
    alert(error);
  }
};

export const handleEditContato = async (idContato, values, navigate) => {
  try {
    await API_DBC.put(`/contato/${idContato}`, values);
    navigate(-1);
  } catch (error) {
    alert(error);
  }
};

export const handleDeleteContato = async (idContato) => {
  try {
    await API_DBC.delete(`/contato/${idContato}`);
  } catch (error) {
    alert(error);
  }
};
