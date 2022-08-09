import { useState } from "react";
import { connect } from "react-redux";
import * as LoginActions from "../store/actions/Login";

const Login = ({ handleLogin }) => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div>
      <label htmlFor="login">login</label>
      <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
      <label htmlFor="senha">senha</label>
      <input type="text" value={senha} onChange={(e) => setSenha(e.target.value)} />
      <button onClick={() => handleLogin(login, senha)}>Selecionar</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  token: state.AuthReducer.token,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (login, senha) => dispatch(LoginActions.handleLogin(login, senha)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
