import "./ItemDetail.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import CartContext from "../Context/CartContext";
import { useNotification } from "../notification/Notification";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const { addItem, getQuantityProd } = useContext(CartContext);

  const { setNotification } = useNotification();

  const handleAdd = (count) => {
    const productObj = {
      id,
      name,
      price,
      quantity: count,
    };

    addItem(productObj);
    setNotification("error", `Producto agregado ${count} ${name} al carrito`);
  };

  return (
    <>
      <div className="container">
        <div className="cardAncho">
          <img className="picture" src={img} alt={name} />
          <h1 className="card-title">{name}</h1>
          <h5 className="card-title">Descipción: {description}</h5>
          <h6 className="card-title">Categoria: {category}</h6>
          <p className="card-text">Precio $ {price}</p>
          {false ? (
            <Link to="/cart" className="goCart">
              Ir al carrito
            </Link>
          ) : (
            <ItemCount
              onAdd={handleAdd}
              stock={stock}
              initial={getQuantityProd(id)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
