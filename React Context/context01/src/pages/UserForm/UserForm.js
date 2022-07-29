import PeopleForm from "../../components/PeopleForm/PeopleForm";
import { useFormik } from "formik";
import { usersApi } from "../../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserFormContainer } from "./UserForm.styled";
import { toast } from "react-hot-toast";

const UserForm = () => {
  const [update, setUpdate] = useState(false);
  const [nome, setNome] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setup();
  }, []);

  const setup = async () => {
    if (id) {
      setUpdate(true);
      const { data } = await usersApi.get(`/pessoa/lista-completa?idPessoa=${id}`);
      setNome(data[0].nome);
      formik.values.id = data[0].idPessoa;
      // formik.values.nome = data[0].nome;
      formik.values.cpf = data[0].cpf;
      formik.values.email = data[0].email;
      formik.values.dataNascimento = data[0].dataNascimento;
      formik.resetForm();
    }
  };

  const handleCreate = async (person) => {
    console.log(person);
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
    console.log("person =>", person);
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
    onSubmit: (values) => {
      update ? handleUpdate(values) : handleCreate(values);
    },
  });

  return (
    <UserFormContainer>
      <PeopleForm formik={formik} update={update} setNome={setNome} nome={nome} />
    </UserFormContainer>
  );
};
export default UserForm;
