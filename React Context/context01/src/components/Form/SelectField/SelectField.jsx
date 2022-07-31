import { Fields } from "../FormField/FormField.styled";
import { Label } from "../Label.styled";
import { Select } from "../Select.styled";

const SelectField = ({ options, id, label, value, onChange }) => {
  return (
    <Fields>
      <Label htmlFor={id}> {label}</Label>
      <Select name={id} id={id} disabled={options.length > 1 ? false : true} value={value} onChange={onChange}>
        {options.map((e, i) => (
          <option key={i} value={e.id}>
            {e.nome}
          </option>
        ))}
      </Select>
    </Fields>
  );
};
export default SelectField;
