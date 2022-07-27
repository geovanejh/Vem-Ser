import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AuthProvider from "./context/AuthContext";
import Address from "./pages/Address";
import Login from "./pages/Login";
import People from "./pages/People";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/address" element={<Address />} />
          <Route path="/people" element={<People />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
