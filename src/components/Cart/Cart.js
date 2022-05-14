import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {

  const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext);

  return (
    <div>
      <h1 className="cartContainer">Carrito de compras</h1>
      <div className="container-fluid mx-auto listTitle">
        <div className="row">
          <div className="col-3 text-center">Producto</div>
          <div className="col-2 text-center">Cantidad</div>
          <div className="col-2 text-center">Precio x Unidad</div>
          <div className="col-2 text-center">Subtotal</div>
          <div className="col-3"></div>
        </div>
        {cart.map((p) => (
          <CartItem key={p.id} {...p} />
        ))}
        <div className="cajaVacio">
          <div className="card-body text-center">
            <h5 className="card-title">TOTAL: ${getTotal()}</h5>
            <p className="card-text">Total productos: {getQuantity()}</p>
            <button className="btn btn-danger" onClick={() => clearCart()}>
              Vaciar carrito
            </button>
            <Link to="/order">
              <button className="btn btn-success btnsCarrito">
                Finalizar Compra
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
