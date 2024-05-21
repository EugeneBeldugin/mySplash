import {Link} from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Link to={`photos/${item.id}`}>
      <img className="w-[100%]" src={item.urls.small} alt="item" />
    </Link>
  )
}

export default Item