import "./App.css";
import Sidebar from "./components/Sidebar";
import Video from "./components/Video";
import { Provider } from "react-redux";

import store from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Video />
        <Sidebar />
      </Provider>
    </div>
  );
}

export default App;
