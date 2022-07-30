import PeopleForm from "../../components/PeopleForm/PeopleForm";
import { useFormik } from "formik";
import { usersApi } from "../../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserFormContainer } from "./UserForm.styled";
import { toast } from "react-hot-toast";
import moment from "moment";
import Loading from "../../components/Loading/Loading";
import * as Yup from "yup";

const UserForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setup();
  }, []);

  const setup = async () => {
    if (id) {
      console.log("entrou");
      const { data } = await usersApi.get(`/pessoa/lista-completa?idPessoa=${id}`);
      formik.values.id = data[0].idPessoa;
      formik.values.nome = data[0].nome;
      formik.values.cpf = data[0].cpf;
      formik.values.email = data[0].email;
      const date = moment(data[0].dataNascimento).format("DD/MM/YYYY");
      formik.values.dataNascimento = date;
      formik.resetForm();
    }
    setLoading(false);
  };

  const formataCamposBackend = (person) => {
    person.dataNascimento = moment(person.dataNascimento, "DD/MM/YYYY").format("YYYY-MM-DD");
    person.cpf = person.cpf.replace(/\D/g, "");
  };

  const handleCreate = async (person) => {
    formataCamposBackend(person);

    try {
      await usersApi.post(`/pessoa`, person);
      toast.success("Usuário cadastrado com sucesso!", {
        style: {
          marginLeft: "255px",
        },
      });
      navigate("/people");
    } catch (error) {
      toast.error("Um erro aconteceu, tente novamente.", {
        style: {
          marginLeft: "255px",
        },
      });
    }
  };

  const handleUpdate = async (person) => {
    formataCamposBackend(person);
    try {
      await usersApi.put(`/pessoa/${person.id}`, {
        nome: person.nome,
        email: person.email,
        dataNascimento: person.dataNascimento,
        cpf: person.cpf,
      });
      toast.success("Usuário editado com sucesso!", {
        style: {
          marginLeft: "255px",
        },
      });
      navigate("/people");
    } catch (error) {
      toast.error("Um erro aconteceu, tente novamente.", {
        style: {
          marginLeft: "255px",
        },
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      id: "",
      nome: "",
      cpf: "",
      email: "",
      dataNascimento: "",
    },
    validationSchema: Yup.object({
      nome: Yup.string().min(3, "- O nome deve ter mais de 2 caracteres.").required("- Obrigatório"),
      cpf: Yup.string().min(14, "- Curto demais.").required("- Obrigatório"),
      email: Yup.string().required("- Obrigatório"),
      dataNascimento: Yup.string().min(10, "- Curto demais.").required("- Obrigatório"),
    }),
    onSubmit: (values) => {
      id ? handleUpdate(values) : handleCreate(values);
    },
  });

  return loading ? (
    <Loading />
  ) : (
    <UserFormContainer>
      <PeopleForm formik={formik} id={id} />
    </UserFormContainer>
  );
};
export default UserForm;
