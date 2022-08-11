import { cepApi } from "../../api";
import { maskCEP, maskOnlyNumbers } from "../../utils/masks";
import { Button } from "../Button/Button.styled";
import { Form } from "../Forms/Form";
import FormField from "../Forms/FormField/FormField";
import { FormRow } from "../Forms/FormRow";

const AddressForm = ({ formik, pessoas }) => {
  const getCepData = async (cep) => {
    try {
      const { data } = await cepApi.get(`${cep.replace("-", "")}/json/`);
      if (data.erro) {
        alert("CPF não encontrado.");
      } else {
        formik.setFieldValue("rua", data.logradouro);
        formik.setFieldValue("bairro", data.bairro);
        formik.setFieldValue("cidade", data.localidade);
        formik.setFieldValue("estado", data.uf);
      }
    } catch (error) {
      alert("Um erro aconteceu, tente novamente.");
    }
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormField
        id="cep"
        type="text"
        label="Cep*"
        maxLength="9"
        onChange={(e) => formik.setFieldValue("cep", maskCEP(e.target.value))}
        value={formik.values.cep}
        onBlur={(e) => {
          formik.handleBlur(e);
          if (formik.values.cep.length === 9) {
            getCepData(formik.values.cep);
          }
        }}
        formik={formik}
        placeholder="Cep"
      />
      <FormField
        id="rua"
        type="text"
        label="Rua*"
        onChange={formik.handleChange}
        value={formik.values.rua}
        onBlur={formik.handleBlur}
        formik={formik}
        placeholder="Rua"
      />
      <FormRow>
        <FormField
          id="bairro"
          type="text"
          label="bairro*"
          onChange={formik.handleChange}
          value={formik.values.bairro}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="Bairro"
          width="200px"
        />
        <FormField
          id="numero"
          type="text"
          label="Número*"
          onChange={(e) => formik.setFieldValue("numero", maskOnlyNumbers(e.target.value))}
          value={formik.values.numero}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="Número"
          width="100px"
        />
      </FormRow>
      <FormRow>
        <FormField
          id="cidade"
          type="text"
          label="cidade*"
          onChange={formik.handleChange}
          value={formik.values.cidade}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="Cidade"
          width="234px"
        />
        <FormField
          id="estado"
          type="text"
          label="estado*"
          onChange={formik.handleChange}
          value={formik.values.estado}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder=""
          width="66px"
        />
      </FormRow>
      <FormField
        id="complemento"
        type="text"
        label="Complemento"
        onChange={formik.handleChange}
        value={formik.values.complemento}
        onBlur={formik.handleBlur}
        formik={formik}
        placeholder="Complemento"
      />
      <Button type="submit" primary>
        Confirmar
      </Button>
    </Form>
  );
};
export default AddressForm;
