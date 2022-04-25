import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { Link } from "react-router-dom";
import './Cart.css'

const Cart = () => {
    const { cart, removeItem, getQuantity, getTotal, clearCart } = useContext(CartContext);
    if(cart.length === 0) {
        return (
            <div className="cart">
                <h1 className="textoCarrito">Tu carrito está vacío</h1>
                <Link className="btn btn-outline-secondary text-center" to={"/"}>Volver al Inicio</Link>
            </div>
        )
    }

    return (
        <>
        <h1 className="cartContainer">Carrito de compras</h1>
        <div>
          <div className="container-fluid mx-auto listTitle">
            <div className="row">
              <div className="col-3 text-center">Producto</div>
              <div className="col-2 text-center">Cantidad</div>
              <div className="col-2 text-center">Unidad</div>
              <div className="col-2 text-center">Subtotal</div>
              <div className="col-3"></div>
            </div>
            
          </div>
          {cart.map((prod) => (
            <div className="container-fluid mx-auto" key={prod.id}>
              <div className="row align-items-center listaProductos">
                <div className="col-3 text-center">{prod.name}</div>
                <div className="col-2 text-center">{prod.quantity}</div>
                <div className="col-2 text-center">$ {prod.price}</div>
                <div className="col-2 text-center">$ {prod.price * prod.quantity}</div>
                <button className="col-3 btnEliminar" onClick={() => removeItem(prod.id)}>Eliminar</button>
              </div>
            </div>
          ))}
        </div>
        <div className="cajaVacio">
          <div className="card-body text-center">
            <h5 className="card-title">TOTAL: ${getTotal() }</h5>
            <p className="card-text">Total productos: {getQuantity()}</p>
            <button className="btn btn-danger" onClick={() => clearCart()}>Vaciar carrito</button>
          </div>
        </div>
      </>
    )
}

export default Cart;

