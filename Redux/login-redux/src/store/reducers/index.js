import { combineReducers } from "redux";

import AuthReducer from "./AuthReducer";
import PessoaReducer from "./PessoaReducer";

export default combineReducers({
  AuthReducer,
  PessoaReducer,
});
