import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { AuthContext } from "./context/AuthContext";
import Endereco from "./pages/Endereco/Endereco";
import EnderecoCrudPage from "./pages/EnderecoCrudPage/EnderecoCrudPage";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound";
import People from "./pages/People/People";
import UserForm from "./pages/UserForm/UserForm";
import Users from "./pages/Register/Register";
import { MainContent, RouterContainer } from "./Routers.styled";

function App() {
  const { auth } = useContext(AuthContext);
  return (
    <RouterContainer>
      <Toaster />
      {auth && <Header />}
      <MainContent auth={auth}>
        <Routes>
          {!auth ? (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/users" element={<Users />} />
            </>
          ) : (
            <>
              <Route path="/" element={<People />} />
              <Route path="/people" element={<People />} />
              <Route path="/people/form/" element={<UserForm />} />
              <Route path="/people/form/:id" element={<UserForm />} />
              <Route path="/endereco/" element={<Endereco />} />
              <Route path="/endereco/:id" element={<Endereco />} />
              <Route path="/endereco/form" element={<EnderecoCrudPage />} />
              <Route path="/endereco/form/idPessoa=:id" element={<EnderecoCrudPage />} />
              <Route path="/endereco/form/idEndereco=:id" element={<EnderecoCrudPage />} />
            </>
          )}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </MainContent>
    </RouterContainer>
  );
}

export default App;
