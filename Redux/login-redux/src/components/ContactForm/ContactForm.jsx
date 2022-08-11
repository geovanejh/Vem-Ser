import { maskPhone } from "../../utils/masks";
import { Button } from "../Button/Button.styled";
import { Form } from "../Forms/Form";
import FormField from "../Forms/FormField/FormField";
import { FormRow } from "../Forms/FormRow";
import SelectField from "../Forms/SelectField/SelectField";

const options = [
  { id: undefined, nome: undefined },
  { id: "COMERCIAL", nome: "COMERCIAL" },
  { id: "RESIDENCIAL", nome: "RESIDENCIAL" },
];

const ContactForm = ({ formik }) => {
  return (
    <Form onSubmit={formik.handleSubmit}>
      <SelectField
        options={options}
        label="tipo*"
        id="tipoContato"
        value={formik.values.tipoContato}
        onChange={formik.handleChange}
      />
      <FormField
        id="telefone"
        type="text"
        label="Número*"
        maxLength="15"
        onChange={(e) => formik.setFieldValue("telefone", maskPhone(e.target.value))}
        value={formik.values.telefone}
        onBlur={formik.handleBlur}
        formik={formik}
        placeholder="Número"
      />
      <FormField
        id="descricao"
        type="text"
        label="Descrição*"
        onChange={formik.handleChange}
        value={formik.values.descricao}
        onBlur={formik.handleBlur}
        formik={formik}
        placeholder="Descrição"
      />
      <Button type="submit" primary>
        Confirmar
      </Button>
    </Form>
  );
};
export default ContactForm;
