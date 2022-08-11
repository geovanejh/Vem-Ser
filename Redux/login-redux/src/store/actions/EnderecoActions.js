import { API_DBC } from "../../api";
import { maskCEP } from "../../utils/masks";
import { setLoading } from "./UtilsActions";

export const handleNewEndereco = async (idPessoa, values, navigate) => {
  try {
    await API_DBC.post(`/endereco/{idPessoa}?idPessoa=${idPessoa}`, values);
    navigate(-1);
  } catch (error) {
    alert(error);
  }
};

export const handleEditEndereco = async (endereco, values, navigate) => {
  try {
    await API_DBC.put(`/endereco/${endereco.idEndereco}`, { ...values, idPessoa: endereco.idPessoa });
    navigate(-1);
  } catch (error) {
    alert(error);
  }
};

export const handleDeleteEndereco = async (idEndereco, dispatch) => {
  setLoading(dispatch);
  try {
    await API_DBC.delete(`/endereco/${idEndereco}`);
  } catch (error) {
    alert(error);
  }
  setLoading(dispatch);
};

export const getEnderecoById = async (idEndereco, dispatch, formik) => {
  setLoading(dispatch);
  try {
    const { data } = await API_DBC.get(`/endereco/${idEndereco}`);
    if (formik) {
      formik.setFieldValue("cep", maskCEP(data.cep));
      formik.setFieldValue("rua", data.logradouro);
      formik.setFieldValue("cidade", data.cidade);
      formik.setFieldValue("estado", data.estado);
      formik.setFieldValue("numero", data.numero);
      formik.setFieldValue("complemento", data.complemento);
    }
    dispatch({
      type: "GET_ENDERECO_BY_ID",
      endereco: data,
    });
  } catch (error) {
    alert(error);
  }
  setLoading(dispatch);
};
