import { useEffect } from "react";
import { GetPessoas, handleDelete } from "../store/actions/PessoaActions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ dispatch, pessoas }) => {
  useEffect(() => {
    GetPessoas(dispatch);
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(`/pessoa/form`)}>Adicionar novo</button>

      <ul>
        {pessoas.map((pessoa) => (
          <li key={pessoa.idPessoa}>
            <p>{pessoa.nome}</p>
            <p>{pessoa.email}</p>
            <p>{pessoa.cpf}</p>
            <p>{pessoa.dataNascimento}</p>
            <div>
              <button onClick={() => navigate(`/pessoa/form/${pessoa.idPessoa}`)}>Editar</button>
              <button onClick={() => handleDelete(pessoa.idPessoa, dispatch)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pessoas: state.PessoaReducer.pessoas,
});

export default connect(mapStateToProps)(Dashboard);
