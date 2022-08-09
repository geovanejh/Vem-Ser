import { connect } from "react-redux";

const Video = ({ activeLesson, activeModule }) => {
  return (
    <div>
      <strong>{activeModule && activeModule.title}</strong>
      <span>{activeLesson && activeLesson.title}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeModule: state.videoReducer.activeModule,
  activeLesson: state.videoReducer.activeLesson,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Video);
