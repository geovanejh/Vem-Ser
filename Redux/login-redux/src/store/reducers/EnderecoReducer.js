const INITIAL_STATE = {
  endereco: "",
};

const EnderecoReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "GET_ENDERECO_BY_ID") {
    return { ...state, endereco: action.endereco };
  }

  return state;
};

export default EnderecoReducer;
