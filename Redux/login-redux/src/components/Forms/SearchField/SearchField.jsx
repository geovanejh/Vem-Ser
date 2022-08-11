import { Input } from "../Input.styled";
import { SearchContainer } from "./SearchField.styled";
import { BsSearch } from "react-icons/bs";

const SearchField = ({ value, placeholder, onChange }) => {
  return (
    <SearchContainer>
      <Input value={value} placeholder={placeholder} onChange={onChange} />
      <BsSearch />
    </SearchContainer>
  );
};
export default SearchField;
