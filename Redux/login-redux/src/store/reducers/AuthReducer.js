const INITIAL_STATE = {
  token: "",
  isLogged: false,
  isLoading: true,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  if (action.type === "SET_LESSON") {
    return { ...state, token: action.token };
  }
  return state;
};

export default AuthReducer;
