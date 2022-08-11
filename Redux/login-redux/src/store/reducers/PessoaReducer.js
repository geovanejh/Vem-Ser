const INITIAL_STATE = {
  pessoas: [],
  pessoa: {},
  searchField: "",
  filter: [],
};

const PessoaReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "GET_PESSOAS") {
    return { ...state, pessoas: action.pessoas, filter: action.pessoas, searchField: "" };
  }

  if (action.type === "DELETE_PESSOA") {
    return { ...state, pessoas: state.pessoas.filter((e) => e.idPessoa !== action.removido) };
  }

  if (action.type === "GET_PESSOA_BY_ID") {
    return { ...state, pessoa: action.pessoa };
  }

  if (action.type === "SET_SEARCH_FIELD") {
    return {
      ...state,
      filter: state.pessoas.filter((e) => e.nome.toLowerCase().includes(action.searchField.toLowerCase().trim())),
      searchField: action.searchField,
    };
  }

  return state;
};

export default PessoaReducer;
