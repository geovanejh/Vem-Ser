import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usersApi } from "../../api";
import { Button } from "../../components/Button/Button.styled";
import EnderecoListItem from "../../components/EnderecoListItem/EnderecoListItem";
import SelectField from "../../components/Form/SelectField/SelectField";
import Loading from "../../components/Loading/Loading";
import { toast } from "react-hot-toast";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { ListPage } from "../../components/ListPages/ListPage";
import { ListPageHeader } from "../../components/ListPages/ListPageHeader";
import { ListPageContainer } from "../../components/ListPages/ListPageContainer";

function Endereco() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pessoas, setPessoas] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const setup = async () => {
    try {
      const { data } = await usersApi.get(`/pessoa/lista-com-enderecos`);
      formik.setFieldValue("proprietario", id);
      atualizaEnderecos(id);

      const nomes = data.map((e) => {
        return { nome: e.nome, id: e.idPessoa };
      });
      setPessoas([{ nome: "Todos", id: "" }, ...nomes]);
    } catch (error) {
      toast.error("Um erro aconteceu, tente novamente.");
    }
  };

  const atualizaEnderecos = async (idClicado) => {
    setLoading(true);
    if (idClicado && idClicado !== "") {
      try {
        const { data: filtrado } = await usersApi.get(`/pessoa/lista-com-enderecos?idPessoa=${idClicado}`);
        setFiltered(filtrado[0].enderecos);
      } catch (error) {
        toast.error("Um erro aconteceu.");
      }
    } else {
      try {
        const { data: filtrado } = await usersApi.get(`endereco?pagina=0&tamanhoDasPaginas=100`);
        setFiltered(filtrado.content);
      } catch (error) {
        toast.error("Um erro aconteceu.");
      }
    }
    setLoading(false);
  };

  const handleEdit = async (idRecebido) => {
    navigate(`/endereco/form/idEndereco=${idRecebido}`);
  };

  const deletaEndereco = async (idRecebido) => {
    setLoading(true);
    try {
      await usersApi.delete(`/endereco/${idRecebido}`);
      atualizaEnderecos(id);
      toast.success("Endereço deletado com sucesso.");
    } catch (error) {
      toast.error("Um erro aconteceu, tente novamente.");
    }
    setLoading(false);
  };

  const handleDelete = async (idRecebido) => {
    confirmAlert({
      title: "Confirmar exclusão",
      message: "Você realmente deseja deletar este usuário?",
      buttons: [
        {
          label: "Sim",
          onClick: () => {
            deletaEndereco(idRecebido);
          },
        },
        {
          label: "Não",
        },
      ],
    });
  };

  useEffect(() => {
    setup();
  }, []);

  const handleNavigate = () => {
    id ? navigate(`/endereco/form/idPessoa=${id}`) : navigate(`/endereco/form`);
  };

  const formik = useFormik({
    initialValues: {
      proprietario: "",
    },
  });
  return loading ? (
    <Loading />
  ) : (
    <ListPage>
      <ListPageHeader>
        <h1>Endereços</h1>
        <div>
          <p>Geovane Hartmann</p>
          <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="" />
        </div>
      </ListPageHeader>
      <ListPageContainer layout="1fr 0.5fr 1fr 0.5fr 1fr 0.5fr">
        <div>
          <SelectField
            id="proprietario"
            options={pessoas}
            label="Proprietário"
            formik={formik}
            value={formik.values.proprietario}
            onChange={async (e) => {
              formik.handleChange(e);
              navigate(`/endereco/${e.target.value}`);
              atualizaEnderecos(e.target.value);
            }}
          />
          <Button primary onClick={handleNavigate}>
            Cadastrar
          </Button>
        </div>
        {filtered.length < 1 ? (
          <div>Este usuário não possui nenhum endereço cadastrado.</div>
        ) : (
          <ul>
            <li>
              <h3>Rua</h3>
              <h3>Número</h3>
              <h3>Cidade</h3>
              <h3>Estado</h3>
              <h3>CEP</h3>
              <h3></h3>
            </li>

            {filtered.map((e, i) => (
              <EnderecoListItem
                layout="1fr 0.5fr 1fr 0.5fr 1fr 0.5fr"
                id={e.idEndereco}
                key={i}
                rua={e.logradouro}
                cidade={e.cidade}
                estado={e.estado}
                numero={e.numero}
                cep={e.cep}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ))}
          </ul>
        )}
      </ListPageContainer>
    </ListPage>
  );
}
export default Endereco;
