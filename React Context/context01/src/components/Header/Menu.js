import Item from "./Item";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect } from "react";

const Menu = () => {
  const { handleLogout, auth } = useContext(AuthContext);
  return (
    <nav>
      <ul>
        {!auth ? (
          <>
            <Item name="Login" url="/" />
            <Item name="Cadastrar usuários" url="/users" />{" "}
          </>
        ) : (
          <>
            <Item name="Endereço" url="/address" />
            <Item name="Pessoa" url="/people" />
            <button onClick={handleLogout}> Sair </button>
          </>
        )}
      </ul>
    </nav>
  );
};
export default Menu;
