import { ItemLista } from "./PeopleContainer.style";

const PeopleContainer = ({ person, handleDelete, handleEdit }) => {
  return (
    <ItemLista>
      <p>{person.nome}</p>
      <p>{person.email}</p>
      <p>{person.cpf}</p>
      <p>{person.dataNascimento}</p>
      <button onClick={() => handleEdit(person)}>Editar</button>
      <button onClick={() => handleDelete(person)}>Excluir</button>
    </ItemLista>
  );
};
export default PeopleContainer;
