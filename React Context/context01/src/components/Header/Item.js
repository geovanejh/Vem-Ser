import { Link } from "react-router-dom";
import { Linha } from "./Item.styled";

const Item = ({ url, name, icon, active }) => {
  return (
    <Linha active={active}>
      <Link to={url}>
        {icon}
        {name}
      </Link>
    </Linha>
  );
};
export default Item;
