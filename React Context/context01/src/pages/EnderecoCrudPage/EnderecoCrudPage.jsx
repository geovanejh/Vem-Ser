import EnderecoForm from "../../components/EnderecoForm/EnderecoForm";
import { FormContainer } from "../../components/Form/FormContainer";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { usersApi } from "../../api";
import Loading from "../../components/Loading/Loading";
import toast from "react-hot-toast";

const EnderecoCrudPage = () => {
  const navigate = useNavigate();
  const { pathname: caminho } = useLocation();
  const { id } = useParams();
  const [pessoas, setPessoas] = useState([]);
  const [loading, setLoading] = useState(true);

  const setup = async () => {
    if (caminho.includes("idPessoa")) {
      try {
        const { data } = await usersApi.get(`/pessoa/lista-completa?idPessoa=${id}`);
        const newArr = data.map((e) => {
          return [{ nome: e.nome, id: e.idPessoa }];
        });
        setPessoas(newArr[0]);
        formik.setFieldValue("proprietario", newArr[0][0].id);
      } catch (error) {
        toast.error("Um erro aconteceu, tente novamente.");
      }
    } else if (caminho.includes("/idEndereco")) {
      try {
        const { data } = await usersApi.get(`/endereco/${id}`);

        const { data: proprietario } = await usersApi.get(`/pessoa/lista-completa?idPessoa=${data.idPessoa}`);

        setPessoas([{ nome: proprietario[0].nome, id: proprietario[0].idPessoa }]);
        const formatedCep = `${data.cep.substring(0, 5)}-${data.cep.substring(5)}`;
        formik.setFieldValue("cep", formatedCep);
        formik.setFieldValue("rua", data.logradouro);
        formik.setFieldValue("cidade", data.cidade);
        formik.setFieldValue("estado", data.estado);
        formik.setFieldValue("complemento", data.complemento);
        formik.setFieldValue("numero", data.numero);
      } catch (error) {
        toast.error("Um erro aconteceu, tente novamente.");
      }
    } else {
      try {
        const { data } = await usersApi.get(`pessoa/lista-completa`);
        const newArr = data.map((e) => {
          return { nome: e.nome, id: e.idPessoa };
        });
        setPessoas(newArr);
      } catch (error) {
        toast.error("Um erro aconteceu, tente novamente.");
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    setup();
  }, []);

  const handleCreateEndereco = async (endereco) => {
    setLoading(true);
    try {
      await usersApi.post(`/endereco/${formik.values.proprietario}?idPessoa=${formik.values.proprietario}`, endereco);
      navigate(`/endereco/${formik.values.proprietario}`);
      toast.success("Endereço cadastrado com sucesso!");
    } catch (error) {
      toast.error("Um erro aconteceu, tente novamente.");
    }
    setLoading(false);
  };

  const handleUpdateEndereco = async (obj) => {
    setLoading(true);
    try {
      await usersApi.put(`/endereco/${id}`, { ...obj, idPessoa: pessoas[0].id });
      toast.success("Endereço alterado com sucesso!");
      navigate(`/endereco/${pessoas[0].id}`);
    } catch (error) {
      toast.error("Um erro aconteceu, tente novamente.");
    }
    setLoading(false);
  };

  const formik = useFormik({
    initialValues: {
      cep: "",
      rua: "",
      bairro: "",
      cidade: "",
      estado: "",
      pais: "",
      numero: "",
      complemento: "",
      proprietario: "",
    },
    validationSchema: Yup.object({
      cep: Yup.string().min(9, "- Formato incorreto.").max(9, "- Formato incorreto.").required("- Obrigatório."),
      rua: Yup.string().max(30, "- Longo demais.").required("- Obrigatório."),
      numero: Yup.string().required("- Obrigatório."),
      bairro: Yup.string().required("- Obrigatório."),
      cidade: Yup.string().required("- Obrigatório."),
      estado: Yup.string().required("- Obrigatório."),
    }),
    onSubmit: (values) => {
      const newObj = {
        cep: values.cep.replace("-", ""),
        logradouro: values.rua,
        numero: values.numero,
        complemento: `Bairro ${values.bairro}, ${values.complemento}`,
        cidade: values.cidade,
        estado: values.estado,
        pais: "Brasil",
        tipo: "RESIDENCIAL",
      };

      if (caminho.includes("/idEndereco")) {
        handleUpdateEndereco(newObj);
      } else {
        handleCreateEndereco(newObj);
      }
    },
  });

  return loading ? (
    <Loading />
  ) : (
    <FormContainer>
      <EnderecoForm formik={formik} pessoas={pessoas} caminho={caminho}></EnderecoForm>
    </FormContainer>
  );
};
export default EnderecoCrudPage;
