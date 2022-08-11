import moment from "moment";

export const maskCPF = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

export const maskDate = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1");
};

export const maskTitleCase = (value) => {
  return value.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const maskCEP = (value) => {
  return value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
};

export const maskOnlyNumbers = (value) => {
  return value.replace(/\D/g, "");
};

export const maskPhone = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1)$2")
    .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
};

export const formataDataFrontEnd = (data) => {
  data = moment(data, "YYYY-MM-DD").format("DD/MM/YYYY");
  return data;
};
