import Item from "./Item";
import { MenuNav } from "./Menu.styled";
import { MdLogout } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { connect } from "react-redux";
import { handleLogout } from "../../store/actions/AuthActions";
import { useNavigate } from "react-router-dom";

const Menu = ({ auth, dispatch }) => {
  const navigate = useNavigate();

  return (
    <MenuNav>
      <ul>
        {!auth.isLogged === true ? (
          <>
            <Item name="Login" url="/" />
            <Item name="Cadastrar usuários" url="/users" />
          </>
        ) : (
          <>
            <Item name="Pessoas" url="/dashboard" icon={<IoPerson />} active />
            <li>
              <button onClick={() => handleLogout(dispatch, navigate)}>
                <MdLogout />
                <p>Sair</p>
              </button>
            </li>
          </>
        )}
      </ul>
    </MenuNav>
  );
};

const mapStateToProps = (state) => ({
  auth: state.AuthReducer,
});

export default connect(mapStateToProps)(Menu);
