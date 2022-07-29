import React from "react";
import { Button } from "../Button/Button.styled";
import FormField from "../FormField/FormField";
import { FormAddPeople } from "./PeopleForm.style";

const PeopleForm = ({ formik, update, setNome, nome }) => {
  return (
    <FormAddPeople onSubmit={formik.handleSubmit}>
      <FormField id="nome" type="text" label="Nome" onChange={(e) => formik.handleChange(e)} value={nome} />
      <FormField id="cpf" type="text" label="CPF" onChange={formik.handleChange} value={formik.values.cpf} />
      <FormField id="email" type="email" label="E-mail" onChange={formik.handleChange} value={formik.values.email} />
      <FormField
        id="dataNascimento"
        type="text"
        label="Data de Nascimento"
        onChange={formik.handleChange}
        value={formik.values.dataNascimento}
      />
      <Button type="submit" primary>
        {update ? "Editar" : "Cadastrar"}
      </Button>
    </FormAddPeople>
  );
};
export default PeopleForm;
