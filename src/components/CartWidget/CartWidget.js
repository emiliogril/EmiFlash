import { useContext } from "react";
import {CgShoppingCart} from "react-icons/cg";
import "./CartWidget.css";
import CartContext from "../Context/CartContext";

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return (
        <button className="btnCarrito">
            <CgShoppingCart /> {getQuantity()}
        </button>
    )
}

export default CartWidget;
