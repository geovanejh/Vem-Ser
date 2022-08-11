import { Link } from "react-router-dom";
import Logotipo from "../../assets/logo.svg";
import { LogoContainer } from "./Logo.styled";

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/people">
        <img src={Logotipo} alt="" />
        <span>People Dashboard</span>
      </Link>
    </LogoContainer>
  );
};
export default Logo;
