import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AuthProvider, { AuthContext } from "./context/AuthContext";
import Address from "./pages/Address";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound";
import People from "./pages/People/People";
import Users from "./pages/Users";

function App() {
  const { auth } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        {!auth ? (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/users" element={<Users />} />
          </>
        ) : (
          <>
            <Route path="/address" element={<Address />} />
            <Route path="/people" element={<People />} />
          </>
        )}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
