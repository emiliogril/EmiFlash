import "../Item/Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    console.log("Hice click en item");
  };

  return (
    <div className="card">
      <img className="card-img-top" src={img} alt="{name}" />
      <div className="card-body">
        <div className="CardItem" onClick={handleClick}>
          <h5 className="card-title">{name}</h5>
          <h6 className="card-title">Precio $ {price}</h6>
          <p className="card-text">
            <Link to={`/detail/${id}`} className="goCart">
              Ver descripción
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
