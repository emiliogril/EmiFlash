import "./ItemDetail.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import CartContext from "../Context/CartContext";



const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

  const { addItem, isInCart } = useContext(CartContext)

  const handleAdd = (count) => {
      const productObj = {
          id, name,price, quantity: count
      }

      addItem(productObj)
  }

    return (
        <>
        <div className="container">
        <div className="card">
          <img className="picture" src={img} alt={name} />
            <h1 className="card-title">{name}</h1>
            <h5 className="card-title">Descipción: {description}</h5>
            <h6 className="card-title">Categoria: {category}</h6>
            <p className="card-text">Precio $ {price}</p>
            {/* <p className="card-text">Stock: {stock}</p> */}
            { isInCart(id) ? <Link to="/cart" className="goCart">Ir al carrito</Link> : <ItemCount onAdd={handleAdd} stock={stock}  />}
            {/* <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} /> */}
          </div>
        </div>
    </>
  );
};

export default ItemDetail;


