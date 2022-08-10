const INITIAL_STATE = {
  token: "",
  isLogged: false,
  isLoading: true,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "SET_LOGIN") {
    console.log("ação: ", action);
    return { ...state, token: action.token, isLogged: action.isLogged, isLoading: action.isLoading };
  }
  if (action.type === "SET_LOADING") {
    return { ...state, isLoading: action.isLoading };
  }
  return state;
};

export default AuthReducer;
