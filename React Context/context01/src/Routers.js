import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AuthProvider, { AuthContext } from "./context/AuthContext";
import Address from "./pages/Address";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound";
import People from "./pages/People/People";
import UserForm from "./pages/UserForm/UserForm";
import Users from "./pages/Users";
import { MainContent, RouterContainer } from "./Routers.styled";

function App() {
  const { auth } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <RouterContainer>
        <Toaster />
        {auth && <Header />}
        <MainContent auth={auth}>
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
                <Route path="/people/form/" element={<UserForm />} />
                <Route path="/people/form/:id" element={<UserForm />} />
              </>
            )}
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </MainContent>
      </RouterContainer>
    </BrowserRouter>
  );
}

export default App;
