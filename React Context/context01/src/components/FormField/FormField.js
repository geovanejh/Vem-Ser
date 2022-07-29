import { Label } from "../Label/Label.styled";
import { Input } from "../../components/Input/Input.styled";
import { Fields } from "./FormField.styled";

const FormField = ({ label, id, type, onChange, value }) => {
  return (
    <Fields>
      <Label htmlFor={id}> {label} </Label>
      <Input id={id} name={id} type={type} onChange={onChange} value={value} />
    </Fields>
  );
};
export default FormField;
