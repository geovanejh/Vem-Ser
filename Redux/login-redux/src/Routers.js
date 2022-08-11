import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./pages/Login";
import Dashboard from "../src/pages/Dashboard";
import { Provider } from "react-redux";
import store from "./store";
import { useEffect } from "react";
import { isAuth } from "./store/actions/AuthActions";
import PessoaForm from "./pages/PessoaForm";
import { MainContent, RouterContainer } from "./Routers.styled";
import Header from "./components/Header/Header";
import PessoaDetalhes from "./pages/PessoaDetalhes/PessoaDetalhes";
import EnderecoForm from "./pages/EnderecoForm";
import Loading from "./components/Loading/Loading";
import ContatoForm from "./pages/ContatoForm";
import Toaster from "react-hot-toast";

function Routers({ dispatch, auth }) {
  useEffect(() => {
    isAuth(dispatch);
  }, []);

  return auth.isLoading === true ? (
    <Loading />
  ) : (
    <RouterContainer>
      <Toaster />
      {auth.isLogged === true && <Header />}
      <Provider store={store}>
        <MainContent auth={auth.isLogged === true ? true : false}>
          <Routes>
            {auth.isLogged === true ? (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/pessoa/form/" element={<PessoaForm />} />
                <Route path="/pessoa/form/:id" element={<PessoaForm />} />
                <Route path="/pessoa/:id" element={<PessoaDetalhes />} />
                <Route path="/pessoa=:idPessoa/endereco/form" element={<EnderecoForm />} />
                <Route path="/endereco/form/:idEndereco" element={<EnderecoForm />} />
                <Route path="/pessoa=:idPessoa/contato/form" element={<ContatoForm />} />
                <Route path="/contato/form/:idContato" element={<ContatoForm />} />
              </>
            ) : (
              <>
                <Route path="/login" element={<Login />} />
              </>
            )}
            <Route path="*" element={<p>não encontrado.</p>}></Route>
          </Routes>
        </MainContent>
      </Provider>
    </RouterContainer>
  );
}

const mapStateToProps = (state) => ({
  auth: state.AuthReducer,
});

export default connect(mapStateToProps)(Routers);
