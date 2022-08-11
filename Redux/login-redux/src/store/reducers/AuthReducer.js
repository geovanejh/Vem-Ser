const INITIAL_STATE = {
  token: "",
  isLogged: false,
  isLoading: true,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "SET_LOGIN") {
    return { ...state, token: action.token, isLogged: action.isLogged, isLoading: action.isLoading };
  }
  if (action.type === "SET_AUTH_LOADING") {
    return { ...state, pessoaLoading: action.loading };
  }
  if (action.type === "SET_LOGOUT") {
    return { ...state, token: "", isLogged: false };
  }
  return state;
};

export default AuthReducer;
