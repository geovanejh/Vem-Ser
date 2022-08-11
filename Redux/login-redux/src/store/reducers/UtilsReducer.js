const INITIAL_STATE = {
  loading: false,
};

const UtilsReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "SET_LOADING") {
    return { ...state, loading: !state.loading };
  }
  return state;
};

export default UtilsReducer;
