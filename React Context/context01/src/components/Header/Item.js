import { Link } from "react-router-dom";

const Item = ({ url, name }) => {
  return (
    <li>
      <Link to={url}>{name}</Link>
    </li>
  );
};
export default Item;
