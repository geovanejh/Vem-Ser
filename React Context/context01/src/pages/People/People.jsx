import { useEffect, useState } from "react";
import { usersApi } from "../../api";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PeopleListItem from "../../components/PeopleListItem/PeopleListItem.js";
import { Button } from "../../components/Button/Button.styled";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Loading from "../../components/Loading/Loading";
import { ListPage } from "../../components/ListPages/ListPage";
import { ListPageHeader } from "../../components/ListPages/ListPageHeader";
import { ListPageContainer } from "../../components/ListPages/ListPageContainer";
import SearchField from "../../components/Form/SearchField/SearchField";

const People = () => {
  const [loading, setLoading] = useState(true);
  const [pessoas, setPessoas] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredPeople, setFilteredPeople] = useState([]);
  const navigate = useNavigate();

  const setup = async () => {
    try {
      const { data } = await usersApi.get("/pessoa/lista-com-enderecos");
      setPessoas(data);
      setFilteredPeople(data);
    } catch (error) {
      toast.error("Um erro aconteceu, tente novamente.", {
        style: {
          marginLeft: "255px",
        },
      });
    }

    setLoading(false);
  };

  const deletaUsuario = async (person) => {
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

  const handleDelete = (person) => {
    confirmAlert({
      title: "Confirmar exclusão",
      message: "Você realmente deseja deletar este usuário?",
      buttons: [
        {
          label: "Sim",
          onClick: () => {
            deletaUsuario(person);
          },
        },
        {
          label: "Não",
        },
      ],
    });
  };

  const handleSearchEdit = (pesquisa) => {
    if (!pesquisa) {
      setFilteredPeople(pessoas);
    } else {
      const filtered = pessoas.filter((e) => {
        return e.nome.toLowerCase().includes(pesquisa.toLowerCase().trim());
      });
      setFilteredPeople(filtered);
    }
  };

  const handleEdit = (person) => {
    navigate(`/people/form/${person.idPessoa}`);
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <ListPage>
      {loading && <Loading />}
      <ListPageHeader>
        <h1>Usuários</h1>
        <div>
          <p>Geovane Hartmann</p>
          <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="" />
        </div>
      </ListPageHeader>
      <ListPageContainer layout="1.5fr 1.5fr 1fr 1fr 1fr 0.5fr">
        <div>
          <SearchField
            value={searchField}
            placeholder="Search..."
            onChange={(e) => {
              setSearchField(e.target.value);
              handleSearchEdit(e.target.value);
            }}
          />
          <Button primary onClick={() => navigate("form/")}>
            Cadastrar
          </Button>
        </div>
        {filteredPeople.length < 1 ? (
          <div>Nenhum usuário encontrado.</div>
        ) : (
          <ul>
            <li>
              <h3>Nome</h3>
              <h3>E-mail</h3>
              <h3>CPF</h3>
              <h3>Data de Nascimento</h3>
              <h3>Endereços</h3>
              <h3></h3>
            </li>
            {filteredPeople.map((e) => (
              <PeopleListItem key={e.idPessoa} person={e} handleDelete={handleDelete} handleEdit={handleEdit} />
            ))}
          </ul>
        )}
      </ListPageContainer>
    </ListPage>
  );
};
export default People;
