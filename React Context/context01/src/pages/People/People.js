import { useEffect, useState } from "react";
import { usersApi } from "../../api";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PeopleContainer, PeopleHeader, PeopleSection } from "./People.styled";
import PeopleListItem from "../../components/PeopleListItem/PeopleListItem.js";
import { Button } from "../../components/Button/Button.styled";

const People = () => {
  const [pessoas, setPessoas] = useState([]);
  const navigate = useNavigate();

  const setup = async () => {
    try {
      const { data } = await usersApi.get("/pessoa?pagina=0&tamanhoDasPaginas=20");
      setPessoas(data.content);
    } catch (error) {
      toast.error("Um erro aconteceu, tente novamente.", {
        style: {
          marginLeft: "255px",
        },
      });
    }
  };

  const handleDelete = async (person) => {
    try {
      await usersApi.delete(`/pessoa/${person.idPessoa}`);
      toast.success("Usuário deletado com sucesso!", {
        style: {
          marginLeft: "255px",
        },
      });
      setup();
    } catch (error) {
      toast.error("Um erro aconteceu, tente novamente.", {
        style: {
          marginLeft: "255px",
        },
      });
    }
  };

  const handleEdit = (person) => {
    navigate(`/people/form/${person.idPessoa}`);
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <PeopleSection>
      <PeopleHeader>
        <h1>Usuários</h1>
        <div>
          <p>Geovane Hartmann</p>
          <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="" />
        </div>
      </PeopleHeader>
      {/* <PeopleForm handleCreate={handleCreate} formik={formik} update={update} /> */}
      <PeopleContainer>
        <div>
          <h2>Todos os usuários</h2>
          <Button primary onClick={() => navigate("form/")}>
            Cadastrar
          </Button>
        </div>
        <ul>
          <li>
            <h3>Nome</h3>
            <h3>E-mail</h3>
            <h3>CPF</h3>
            <h3>Data de Nascimento</h3>
            <h3></h3>
          </li>
          {pessoas.map((e) => (
            <PeopleListItem key={e.idPessoa} person={e} handleDelete={handleDelete} handleEdit={handleEdit} />
          ))}
        </ul>
      </PeopleContainer>
    </PeopleSection>
  );
};
export default People;
