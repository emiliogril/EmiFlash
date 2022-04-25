import { useState, useEffect } from "react";
// import { getProductsById } from '../../asyncmock';
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import { firestoreDb } from '../../services/firebase'
import { getDoc, doc } from 'firebase/firestore'


const ItemDetailContainer = ({ setCart, cart }) => {

  const [product, setProduct] = useState()
  const [loading, setLoading] = useState(false)

  const { productId} = useParams()

useEffect(() => {
 
  getDoc(doc(firestoreDb, 'products', productId)).then(response => {
    console.log(response)
    const product = { id: response.id, ...response.data()}
    setProduct(product)
})


  return (() => {
    setProduct()
  })
},[productId])

if(loading) {
  return (
    <h1 className="loading">Cargando...</h1>
  )
}


  return (
    <div className="ItemDetailContainer">
      {
        product ?

          <ItemDetail {...product} setCart={setCart} cart={cart} /> :
          <h1 className="noExiste">El producto no existe</h1>
      }
      </div>
  );
};

export default ItemDetailContainer