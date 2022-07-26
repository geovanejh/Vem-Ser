import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginProvider from "./context/LoginContext";
import Login from "./pages/Login";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <LoginProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;
