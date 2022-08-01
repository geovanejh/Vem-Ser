import PeopleForm from "../../components/PeopleForm/PeopleForm";
import { useFormik } from "formik";
import { usersApi } from "../../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import moment from "moment";
import Loading from "../../components/Loading/Loading";
import * as Yup from "yup";
import { FormContainer } from "../../components/Form/FormContainer";

const UserForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setup();
  }, []);

  const setup = async () => {
    if (id) {
      const { data } = await usersApi.get(`/pessoa/lista-completa?idPessoa=${id}`);
      const person = data[0];
      formik.values.id = person.idPessoa;
      formik.values.nome = person.nome;
      const newCpf = `${person.cpf.slice(0, 3)}.${person.cpf.slice(3, 6)}.${person.cpf.slice(6, 9)}-${person.cpf.slice(
        9
      )}`;
      formik.values.cpf = newCpf;
      formik.values.email = person.email;
      const date = moment(person.dataNascimento).format("DD/MM/YYYY");
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
      email: Yup.string().required("- Obrigatório").email("Email inválido."),
      dataNascimento: Yup.string().min(10, "- Curto demais.").required("- Obrigatório"),
    }),
    onSubmit: (values) => {
      id ? handleUpdate(values) : handleCreate(values);
    },
  });

  return loading ? (
    <Loading />
  ) : (
    <FormContainer>
      <PeopleForm formik={formik} id={id} />
    </FormContainer>
  );
};
export default UserForm;
