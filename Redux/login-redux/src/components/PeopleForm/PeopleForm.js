import React from "react";
import { maskCPF, maskDate, maskTitleCase } from "../../utils/masks";
import { Button } from "../Button/Button.styled";
import FormField from "../Forms/FormField/FormField";
import { FormAddPeople } from "./PeopleForm.style";

const PeopleForm = ({ formik, id }) => {
  return (
    <>
      <FormAddPeople onSubmit={formik.handleSubmit}>
        <FormField
          id="nome"
          type="text"
          label="Nome*"
          onChange={(e) => formik.setFieldValue("nome", maskTitleCase(e.target.value))}
          value={formik.values.nome}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="Nome"
        />
        <FormField
          id="cpf"
          type="text"
          label="CPF*"
          onChange={(e) => formik.setFieldValue("cpf", maskCPF(e.target.value))}
          value={formik.values.cpf}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="000.000.000-00"
        />
        <FormField
          id="email"
          type="text"
          label="E-mail*"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="Email"
        />
        <FormField
          id="dataNascimento"
          type="text"
          label="Data de Nascimento*"
          onChange={(e) => formik.setFieldValue("dataNascimento", maskDate(e.target.value))}
          value={formik.values.dataNascimento}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="00/00/0000"
        />
        <Button type="submit" primary>
          {id ? "Editar" : "Cadastrar"}
        </Button>
      </FormAddPeople>
    </>
  );
};
export default PeopleForm;
