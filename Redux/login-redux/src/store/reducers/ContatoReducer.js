const INITIAL_STATE = {
  contato: "",
};

const ContatoReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "GET_CONTATO_BY_ID") {
    return { ...state, contato: action.contato[0] };
  }

  return state;
};

export default ContatoReducer;
