import { useContext } from "react";
import CartContext from "../Context/CartContext";
import './Cart.css'

const Cart = () => {
    const { cart, removeItem } = useContext(CartContext);
    if(cart.length === 0) {
        return (
            <div className="cart">
                <h1 className="textoCarrito">Tu carrito está vacío</h1>
            </div>
        )
    }

    return (
        <>
        <h1 className='cartContainer'>Lista de Pedidos</h1>
        {cart.map(prod => 
        <div className='container' key={prod.id}>
            <div className='row' >
            <div className='col'>Articulo: {prod.name}</div>
            <div className='col'>Cantidad: {prod.quantity}</div>
            <div className='col'>Precio $ {prod.price} </div>
            <div className='col'>Total: $ {prod.price * prod.quantity} </div>
            <button type="button" className='btn-close' onClick={() => removeItem(prod.id)}></button>
          </div>
        </div>
        )}
</>
    )
}

export default Cart;

