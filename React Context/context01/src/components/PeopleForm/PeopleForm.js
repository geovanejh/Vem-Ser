import React from "react";
import { Button } from "../Button/Button.styled";
import FormField from "../FormField/FormField";
import { FormAddPeople } from "./PeopleForm.style";

const maskDate = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1");
};

const maskCPF = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

const PeopleForm = ({ formik, id }) => {
  return (
    <FormAddPeople onSubmit={() => formik.handleSubmit}>
      <FormField
        id="nome"
        type="text"
        label="Nome"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.nome}
        // errors={formik.errors.nome}
      />
      {!formik.touched.nome && formik.errors.nome ? <div>{formik.errors.nome}</div> : null}
      <FormField
        id="cpf"
        type="text"
        label="CPF"
        onChange={(e) => formik.setFieldValue("cpf", maskCPF(e.target.value))}
        value={formik.values.cpf}
        onBlur={formik.handleBlur}
        // errors={formik.errors.cpf}
      />
      <FormField
        id="email"
        type="email"
        label="E-mail"
        onChange={() => formik.handleChange}
        value={formik.values.email}
        onBlur={() => formik.handleBlur}
        // errors={formik.errors.email}
      />
      <FormField
        id="dataNascimento"
        type="text"
        label="Data de Nascimento"
        onChange={(e) => formik.setFieldValue("dataNascimento", maskDate(e.target.value))}
        value={formik.values.dataNascimento}
        onBlur={formik.handleBlur}
        // errors={formik.errors.dataNascimento}
      />
      <Button type="submit" primary>
        {id ? "Editar" : "Cadastrar"}
      </Button>
    </FormAddPeople>
  );
};
export default PeopleForm;
