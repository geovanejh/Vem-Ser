import { combineReducers } from "redux";

import AuthReducer from "./AuthReducer";
import PessoaReducer from "./PessoaReducer";
import UtilsReducer from "./UtilsReducer";
import EnderecoReducer from "./EnderecoReducer";
import ContatoReducer from "./ContatoReducer";

export default combineReducers({
  AuthReducer,
  PessoaReducer,
  UtilsReducer,
  EnderecoReducer,
  ContatoReducer,
});
