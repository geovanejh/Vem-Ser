import { useState } from "react";
import { connect } from "react-redux";
import * as VideoActions from "../store/actions/video";

const Sidebar = ({ modules, handleLesson }) => {
  return (
    <div>
      {modules.map((module) => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map((lesson) => (
              <li key={lesson.id}>
                {lesson.title}
                <button onClick={() => handleLesson(module, lesson)}>Selecionar</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  modules: state.videoReducer.modules,
});

const mapDispatchToProps = (dispatch) => ({
  handleLesson: (module, lesson) => dispatch(VideoActions.handleLesson(module, lesson)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
