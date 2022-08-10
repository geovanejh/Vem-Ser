const INITIAL_STATE = {
  pessoas: [],
  pessoa: {},
};

const PessoaReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "GET_PESSOAS") {
    return { ...state, pessoas: action.pessoas };
  }

  if (action.type === "DELETE_PESSOA") {
    return { ...state, pessoas: state.pessoas.filter((e) => e.idPessoa !== action.removido) };
  }

  if (action.type === "GET_PESSOA_BY_ID") {
    return { ...state, pessoa: action.pessoa };
  }

  return state;
};

export default PessoaReducer;
