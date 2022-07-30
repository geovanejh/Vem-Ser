import { Label } from "../Label/Label.styled";
import { Input } from "../../components/Input/Input.styled";
import { Fields } from "./FormField.styled";

const FormField = ({ label, id, type, onChange, value, placeholder, errors, touched, onBlur }) => {
  return (
    <Fields>
      <Label htmlFor={id} errors={errors}>
        {label}
      </Label>
      <Input
        id={id}
        name={id}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        placeholder={placeholder}
        errors={errors}
      />
      <span> {errors} </span>
    </Fields>
  );
};
export default FormField;
