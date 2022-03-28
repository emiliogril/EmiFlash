import {CgShoppingCart} from "react-icons/cg";
import "./CartWidget.css";

const CartWidget = () => {
    return (
        <button className="btnCarrito">
            <CgShoppingCart />
            <a>0</a>
        </button>
    )
}

export default CartWidget;
