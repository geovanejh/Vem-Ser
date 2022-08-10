import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./pages/Login";
import Dashboard from "../src/pages/Dashboard";

import { Provider } from "react-redux";
import store from "./store";
import { useEffect } from "react";
import { isAuth } from "./store/actions/AuthActions";
import PessoaForm from "./pages/PessoaForm";
function Routers({ dispatch, auth }) {
  useEffect(() => {
    isAuth(dispatch);
  }, []);

  return auth.isLoading ? (
    <>CARREGANDO</>
  ) : (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          {console.log("logged: ", auth.isLogged)}
          {auth.isLogged === true ? (
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pessoa/form/" element={<PessoaForm />} />
              <Route path="/pessoa/form/:id" element={<PessoaForm />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
            </>
          )}
          <Route path="*" element={<p>não encontrado.</p>}></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  auth: state.AuthReducer,
});

export default connect(mapStateToProps)(Routers);
