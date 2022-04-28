import { Link } from 'react-router-dom'
import { useContext, useState} from "react";
import CartContext from "../Context/CartContext";
import CartItem from  "../CartItem/CartItem";
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase/index";
import './Cart.css'

const Cart = () => {
  const [loading, setLoading] = useState(false)

  const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)

//   const createOrder = () => {
//       setLoading(true)

//       const objOrder = {
//           items: cart,
//           buyer: {
//               name: 'Emi Flash',
//               phone: '123456789',
//               email: 'emiflash@gmail.com'
//           },
//           total: getTotal(),
//           date: new Date()
//       }

//       const ids = cart.map(prod => prod.id)

//       const batch = writeBatch(firestoreDb)

//       const collectionRef = collection(firestoreDb, 'products')

//       const outOfStock = []

//       getDocs(query(collectionRef, where(documentId(), 'in', ids)))
//           .then(response => {
//               response.docs.forEach(doc => {
//                   const dataDoc = doc.data()
//                   const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

//                   if(dataDoc.stock >= prodQuantity) {
//                       batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
//                   } else {
//                       outOfStock.push({ id: doc.id, ...dataDoc })
//                   }
//               })
//           }).then(() => {
//               if(outOfStock.length === 0) {
//                   const collectionRef = collection(firestoreDb, 'orders')
//                   return addDoc(collectionRef, objOrder)
//               } else {
//                   return Promise.reject({ name: 'outOfStockError', products: outOfStock})
//               }
//           }).then(({ id }) => {
//               batch.commit()
//               console.log(`El id de la orden es ${id}`)
//           }).catch(error => {
//               console.log(error)
//           }).finally(() => {
//               setLoading(false)
//           })
//   }

//   if(loading) {
//       return <h1>Se esta generando su orden</h1>
//   }

//   if(getQuantity() === 0) {
//       return (
//           <h1>No hay items en el carrito</h1>
//       )
//   }


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
          { cart.map(p => <CartItem key={p.id} {...p}/>) }


        <div className="cajaVacio">
          <div className="card-body text-center">
            <h5 className="card-title">TOTAL: ${getTotal() }</h5>
            <p className="card-text">Total productos: {getQuantity()}</p>
            <button className="btn btn-danger" onClick={() => clearCart()}>Vaciar carrito</button>
            {/* <button onClick={() => createOrder()} className="btn btn-danger">Generar Orden</button> */}
            
            <Link to="/order"><button className="btn btn-success btnsCarrito">Finalizar Compra</button></Link>
          </div>
        </div>
      </div></div>
      )
  }


export default Cart;

