import { Label } from "../Label.styled";
import { Input } from "../Input.styled";
import { Fields } from "./FormField.styled";

const FormField = ({ label, id, type, onChange, onBlur, placeholder, formik, width }) => {
  const field = formik.getFieldMeta(id);
  const props = formik.getFieldProps(id);
  return (
    <Fields>
      <Label htmlFor={id} errors={field.error} touched={field.touched}>
        {label}
      </Label>
      <Input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        width={width}
        onChange={onChange}
        value={props.value}
        onBlur={onBlur}
        errors={field.error}
        touched={field.touched}
      />
      {field.touched && field.error ? <span>{field.error}</span> : null}
    </Fields>
  );
};
export default FormField;
