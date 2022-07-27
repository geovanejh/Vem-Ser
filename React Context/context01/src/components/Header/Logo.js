import { Link } from "react-router-dom";
import { FaEarlybirds } from "react-icons/fa";

const Logo = () => {
  return (
    <Link to="/">
      <FaEarlybirds></FaEarlybirds>
    </Link>
  );
};
export default Logo;
