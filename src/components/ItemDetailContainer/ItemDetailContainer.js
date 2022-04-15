import { useState, useEffect } from "react";
import { getProductsById } from '../../asyncmock';
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";


const ItemDetailContainer = ({ setCart, cart }) => {

  const [product, setProductsId] = useState();
  const [loading, setLoading] = useState(true);

  const { productId} = useParams();

useEffect(() => {
  getProductsById(productId).then(item => {
    setProductsId(item)
  }).catch(err => {
    console.log(err)
  }).finally(() => {
    setLoading(false)
  })


  return (() => {
    setProductsId()
  })
},[])


  return (
    <div className="ItemDetailContainer">
      {
        loading ?
            <h1>Cargando...</h1> :
        product ?

          <ItemDetail {...product} setCart={setCart} cart={cart} /> :
          <h1>El producto no existe</h1>
      }
      </div>
  );
};

export default ItemDetailContainer