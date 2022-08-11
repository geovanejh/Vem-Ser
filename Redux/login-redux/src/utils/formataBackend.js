import moment from "moment";

export const formataPessoa = (cpf, data) => {
  data = moment(data, "DD/MM/YYYY").format("YYYY-MM-DD");
  cpf = cpf.replace(/\D/g, "");
  return { cpf, data };
};
