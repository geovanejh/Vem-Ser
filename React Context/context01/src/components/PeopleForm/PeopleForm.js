import React from "react";

const PeopleForm = ({ formik, update }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input id="nome" name="nome" type="text" onChange={(e) => formik.handleChange(e)} value={formik.values.nome} />
      <label htmlFor="cpf">CPF</label>
      <input id="cpf" name="cpf" type="text" onChange={formik.handleChange} value={formik.values.cpf} />
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
      <label htmlFor="dataNascimento">Data de Nascimento</label>
      <input
        id="dataNascimento"
        name="dataNascimento"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.dataNascimento}
      />
      <button type="submit">{update ? "Editar" : "Adicionar"}</button>
    </form>
  );
};
export default PeopleForm;
