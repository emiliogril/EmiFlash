import { useContext } from "react";
import { CgShoppingCart } from "react-icons/cg";
import "./CartWidget.css";
import CartContext from "../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);

  return (
    <button className="btnCarrito">
      <Link className="fas fa-shopping-cart carrito-boton" to="/cart">
        {" "}
        <i className="carrito-contador">
          {" "}
          <CgShoppingCart /> {getQuantity()}{" "}
        </i>
      </Link>
    </button>
  );
};

export default CartWidget;
