const INITIAL_STATE = {
  activeLesson: null,
  activeModule: null,
  modules: [
    {
      id: 1,
      title: "Iniciando com React",
      lessons: [
        { id: 1, title: "primeira aula" },
        { id: 2, title: "segunda aula" },
      ],
    },
    {
      id: 2,
      title: "Iniciando com Redux",
      lessons: [
        { id: 3, title: "terceira aula" },
        { id: 4, title: "quarta aula" },
      ],
    },
  ],
};

const videoReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "SET_LESSON") {
    return { ...state, activeLesson: action.lesson, activeModule: action.module };
  }
  return state;
};

export default videoReducer;
