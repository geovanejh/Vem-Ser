import { useState } from "react";
import { connect } from "react-redux";
import * as LoginActions from "../store/actions/AuthActions";
import { useNavigate } from "react-router-dom";

const Login = ({ dispatch }) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div>
      <label htmlFor="login">login</label>
      <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
      <label htmlFor="senha">senha</label>
      <input type="text" value={senha} onChange={(e) => setSenha(e.target.value)} />
      <button onClick={() => LoginActions.handleLogin(login, senha, dispatch, navigate)}>Selecionar</button>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Login);
