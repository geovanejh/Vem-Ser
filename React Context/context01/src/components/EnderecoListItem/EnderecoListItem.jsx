import { Button } from "../Button/Button.styled";
import { RiDeleteBinFill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { ListItem } from "../FlatList/ListItem";

const EnderecoListItem = ({ rua, cidade, numero, estado, cep, handleEdit, handleDelete, id, layout }) => {
  return (
    <ListItem layout={layout}>
      <div>{rua}</div>
      <div>{numero}</div>
      <div>{cidade}</div>
      <div>{estado}</div>
      <div>{cep}</div>
      <div>
        <Button onClick={() => handleEdit(id)} border="none" background="transparent" fontSize="20px">
          <FiEdit />
        </Button>
        <Button onClick={() => handleDelete(id)} border="none" background="transparent" fontSize="20px">
          <RiDeleteBinFill />
        </Button>
      </div>
    </ListItem>
  );
};
export default EnderecoListItem;
