import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const People = () => {
  const { verificaLogado } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!verificaLogado()) {
      navigate("/");
    }
  }, []);

  return <div>People</div>;
};
export default People;
