import { Button } from "../Button/Button.styled";
import { ItemLista } from "./PeopleListItem.style";
import { RiDeleteBinFill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const PeopleListItem = ({ person, handleDelete, handleEdit }) => {
  const imgPlaceholder = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";
  const date = moment(person.dataNascimento).format("DD/MM/YYYY");
  const navigate = useNavigate();

  const handleEndereco = (person) => {
    navigate(`/endereco/${person.idPessoa}`);
  };

  return (
    <ItemLista layout="1.5fr 1.5fr 1fr 1fr 1fr 0.5fr">
      <div>
        <img src={imgPlaceholder} alt="" />
        <p>{person.nome}</p>
      </div>
      <div>
        <p>{person.email}</p>
      </div>
      <div>
        <p>{person.cpf}</p>
      </div>
      <div>
        <p>{date}</p>
      </div>
      <div>
        <Button onClick={() => handleEndereco(person)} border="none" background="transparent" fontSize="20px">
          Endereço
        </Button>
      </div>
      <div>
        <Button onClick={() => handleEdit(person)} border="none" background="transparent" fontSize="20px">
          <FiEdit />
        </Button>
        <Button onClick={() => handleDelete(person)} border="none" background="transparent" fontSize="20px">
          <RiDeleteBinFill />
        </Button>
      </div>
    </ItemLista>
  );
};
export default PeopleListItem;
