import { useEffect } from "react";
import { GetPessoas, handleDelete, handleEditSearch } from "../store/actions/PessoaActions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ListPage } from "../components/ListPages/ListPage";
import { ListPageHeader } from "../components/ListPages/ListPageHeader";
import { ListPageContainer } from "../components/ListPages/ListPageContainer";
import { Button } from "../components/Button/Button.styled";
import SearchField from "../components/Forms/SearchField/SearchField";
import PeopleListItem from "../components/PeopleListItem/PeopleListItem";

const Dashboard = ({ dispatch, searchField, filter }) => {
  useEffect(() => {
    GetPessoas(dispatch);
  }, []);

  const navigate = useNavigate();

  return (
    <ListPage>
      <ListPageHeader>
        <h1>Pessoas</h1>
        <div>
          <p>Geovane Hartmann</p>
          <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="" />
        </div>
      </ListPageHeader>
      <ListPageContainer layout="1.5fr 1.5fr 1fr 1fr 0.5fr">
        <div>
          <SearchField
            value={searchField}
            placeholder="Search..."
            onChange={(e) => {
              handleEditSearch(e.target.value, dispatch);
              console.log(searchField);
            }}
          />
          <Button primary onClick={() => navigate(`/pessoa/form`)}>
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
          {filter.map((e) => (
            <PeopleListItem
              key={e.idPessoa}
              person={e}
              handleDelete={async () => {
                await handleDelete(e.idPessoa, dispatch);
                GetPessoas(dispatch);
              }}
              dispatch={dispatch}
              handleEdit={() => navigate(`/pessoa/form/${e.idPessoa}`)}
            />
          ))}
        </ul>
      </ListPageContainer>
    </ListPage>
  );
};

const mapStateToProps = (state) => ({
  pessoas: state.PessoaReducer.pessoas,
  searchField: state.PessoaReducer.searchField,
  filter: state.PessoaReducer.filter,
});

export default connect(mapStateToProps)(Dashboard);
