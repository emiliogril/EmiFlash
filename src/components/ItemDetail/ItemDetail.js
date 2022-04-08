import { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { getProductsById } from "../../asyncmock";
import "./ItemDetail.css";

const ItemDetail = ({ id, name, price, category, img, stock, description}) => {

    const handleOnAdd = (quantity) => {
        console.log(`Se compro ${quantity} productos`);
      };

    return (
        <>
         <div className="container">
         <div className="card">
             <img src={img} className="card-img-top" alt="adictos" />
           <div className="card-body">
             <h5 className="card-title">Respeta al ciclista</h5>
             <p className="card-text">
               Precio: <b>$8000</b>
             </p>
             <ItemCount initial={1} stock={5} onAdd={handleOnAdd} />
           </div>
         </div>
       </div>
     </>
   );
 };

export default ItemDetail;


