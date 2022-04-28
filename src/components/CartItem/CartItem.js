import './CartItem.css'
import { useContext } from 'react'
import CartContext from '../Context/CartContext'


const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        
            
            <div className="row">
              <div className="col-3 text-center">
              <h2 className="text-center">{name}</h2></div>
              <div className="col-2 text-center">
              <h2 className="text-center">{quantity}</h2></div>
              <div className="col-2 text-center">
                <h2 className="text-center">${price}</h2></div>
              <div className="col-2 text-center">
              <h2 className="text-center">${price * quantity}</h2></div>
              <div className="col-3"><button className='btn btn-danger' onClick={() => handleRemove(id)}>X</button></div>
              <div className="col-3"></div>
            </div>
             
                 
       
    )
}

export default CartItem