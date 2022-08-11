import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button/Button.styled";
import { ListPage } from "../../components/ListPages/ListPage";
import Loading from "../../components/Loading/Loading";
import { handleDeleteEndereco } from "../../store/actions/EnderecoActions";
import { handleDeleteContato } from "../../store/actions/ContatoActions";
import { getPessoaById } from "../../store/actions/PessoaActions";
import { PageContainer } from "./styles";
import { RiDeleteBinFill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

const PessoaDetalhes = ({ dispatch, pessoa, loading }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const setup = () => {
    getPessoaById(id, dispatch);
  };

  useEffect(() => {
    setup();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <ListPage>
      <PageContainer>
        <h1>{pessoa.nome}</h1>
        <h4>{pessoa.cpf}</h4>
        <h4>{pessoa.dataNascimento}</h4>
        <h4>{pessoa.email}</h4>
        <hr />
        <div>
          <div>
            <div>
              <h3>Endereços:</h3>
              <Button primary onClick={() => navigate(`/pessoa=${id}/endereco/form`)}>
                Adicionar
              </Button>
            </div>
            <ul>
              <li>
                <p>Rua</p>
                <p>Cidade/UF</p>
                <p>N°</p>
              </li>
              {pessoa.enderecos &&
                pessoa.enderecos.map((endereco) => (
                  <li>
                    <p>{endereco.logradouro}</p>
                    <p>
                      {endereco.cidade}/{endereco.estado}
                    </p>
                    <p>{endereco.numero}</p>
                    <div>
                      <Button
                        onClick={() => navigate(`/endereco/form/${endereco.idEndereco}`)}
                        border="none"
                        background="transparent"
                        fontSize="16px"
                      >
                        <FiEdit />
                      </Button>
                      <Button
                        onClick={async () => {
                          await handleDeleteEndereco(endereco.idEndereco);
                          setup();
                        }}
                        border="none"
                        background="transparent"
                        fontSize="16px"
                      >
                        <RiDeleteBinFill />
                      </Button>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <hr />
          <div>
            <div>
              <h3>Contatos:</h3>
              <Button primary onClick={() => navigate(`/pessoa=${id}/contato/form`)}>
                Adicionar
              </Button>
            </div>
            <ul>
              <li>
                <p>Tipo</p>
                <p>Telefone</p>
                <p>Descrição</p>
              </li>
              {pessoa.contatos &&
                pessoa.contatos.map((contato) => (
                  <li key={contato.idContato}>
                    <p>{contato.tipoContato}</p>
                    <p>{contato.telefone}</p>
                    <p>{contato.descricao}</p>
                    <div>
                      <Button
                        onClick={() => navigate(`/contato/form/${contato.idContato}`)}
                        border="none"
                        background="transparent"
                        fontSize="16px"
                      >
                        <FiEdit />
                      </Button>
                      <Button
                        onClick={async () => {
                          await handleDeleteContato(contato.idContato);
                          setup();
                        }}
                        border="none"
                        background="transparent"
                        fontSize="16px"
                      >
                        <RiDeleteBinFill />
                      </Button>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </PageContainer>
    </ListPage>
  );
};

const mapStateToProps = (state) => ({
  pessoa: state.PessoaReducer.pessoa,
  loading: state.UtilsReducer.loading,
});

export default connect(mapStateToProps)(PessoaDetalhes);
