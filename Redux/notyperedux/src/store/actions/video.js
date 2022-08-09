export const handleLesson = (module, lesson) => {
  return {
    type: "SET_LESSON",
    module,
    lesson,
  };
};
