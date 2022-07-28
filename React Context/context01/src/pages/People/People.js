import { useEffect, useState } from "react";
import { usersApi } from "../../api";
import PeopleContainer from "../../components/PeopleContainer/PeopleContainer";
import PeopleForm from "../../components/PeopleForm/PeopleForm";
import { useFormik } from "formik";

const People = () => {
  const [pessoas, setPessoas] = useState([]);
  const [update, setUpdate] = useState(false);

  const setup = async () => {
    try {
      const { data } = await usersApi.get("/pessoa?pagina=0&tamanhoDasPaginas=20");
      console.log(data);
      setPessoas(data.content);
    } catch (error) {
      alert(error);
    }
  };

  const handleDelete = async (person) => {
    try {
      await usersApi.delete(`/pessoa/${person.idPessoa}`);
      alert(`usuário deletado com sucesso!`);
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };

  const handleCreate = async (person) => {
    console.log(person);
    try {
      await usersApi.post(`/pessoa`, person);
      alert(`Usuário cadastrado com sucesso.`);
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };

  const updatePerson = async (person) => {
    console.log("person =>", person);
    try {
      await usersApi.put(`/pessoa/${person.id}`, {
        nome: person.nome,
        email: person.email,
        dataNascimento: person.dataNascimento,
        cpf: person.cpf,
      });
      alert(`Usuário atualizado com sucesso!`);
      window.location.reload();
    } catch (error) {
      alert(error);
    }
    setUpdate(false);
  };

  const handleEdit = async (person) => {
    formik.values.id = person.idPessoa;
    formik.values.nome = person.nome;
    formik.values.cpf = person.cpf;
    formik.values.email = person.email;
    formik.values.dataNascimento = person.dataNascimento;
    formik.resetForm();
    setUpdate(true);
  };

  useEffect(() => {
    setup();
  }, []);

  const formik = useFormik({
    initialValues: {
      id: "",
      nome: "",
      cpf: "",
      email: "",
      dataNascimento: "",
    },
    onSubmit: (values) => {
      update ? updatePerson(values) : handleCreate(values);
    },
  });

  return (
    <div>
      <PeopleForm handleCreate={handleCreate} formik={formik} update={update} />
      <ul>
        {pessoas.map((e) => (
          <PeopleContainer
            key={e.idPessoa}
            person={e}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            update={update}
          />
        ))}
      </ul>
    </div>
  );
};
export default People;
