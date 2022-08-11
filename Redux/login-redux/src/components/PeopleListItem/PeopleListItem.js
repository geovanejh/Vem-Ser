import { Button } from "../Button/Button.styled";
import { RiDeleteBinFill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import moment from "moment";
import { ListItem } from "../FlatList/ListItem";
import { useNavigate } from "react-router-dom";

const PeopleListItem = ({ person, handleDelete, handleEdit }) => {
  const imgPlaceholder = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";
  const date = moment(person.dataNascimento).format("DD/MM/YYYY");
  const navigate = useNavigate();

  const formata = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  };

  return (
    <ListItem layout="1.5fr 1.5fr 1fr 1fr 0.5fr" onClick={() => navigate(`/pessoa/${person.idPessoa}`)}>
      <div>
        <img src={imgPlaceholder} alt="" />
        <p>{person.nome}</p>
      </div>
      <div>
        <p>{person.email}</p>
      </div>
      <div>
        <p>{formata(person.cpf)}</p>
      </div>
      <div>
        <p>{date}</p>
      </div>
      <div onClick={(e) => e.stopPropagation()}>
        <Button onClick={() => handleEdit(person)} border="none" background="transparent" fontSize="20px">
          <FiEdit />
        </Button>
        <Button onClick={() => handleDelete()} border="none" background="transparent" fontSize="20px">
          <RiDeleteBinFill />
        </Button>
      </div>
    </ListItem>
  );
};
export default PeopleListItem;
