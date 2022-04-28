import './finishOrder.css';
import React, { useState, useContext } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { firestoreDb } from '../../services/firebase/index'
import CartContext from '../Context/CartContext'
import { Link } from 'react-router-dom'


const initialState = {
    name: "",
    lastName: "",
    address: "",
    tel: ""
}

const FinishOrder = () => {

    const { cart, clearCart, getTotal, } = useContext(CartContext);

    const [userInfo, setUserInfo] = useState(initialState);
    const [orderStatus, setOrderStatus] = useState(null)
    const [orderId, setOrderId] = useState(null)

    const getInfo = (e) => {
        const { value, name } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    }

    const orderConfirmed = () => {
        setUserInfo(initialState);
        clearCart()
        setOrderStatus('confirmed')
    }

    const createOrder = async () => {
        setOrderStatus('processing')
        const order = {
            productsOrder: cart.map(prod => { return ({ id: prod.id, name: prod.name, quantity: prod.quantity, price: prod.price, totalProducPrice: prod.quantity * prod.price }) }),
            userInfo: userInfo,
            total: getTotal(),
        }

        const collectionRef = collection(firestoreDb, "orders")
        setOrderId((await addDoc(collectionRef, order)).id)
        orderConfirmed(orderId)
    }

    if (orderStatus === 'confirmed') {
        return (
            <div className='d-flex justify-content-between flex-column align-items-center'>
                <h1>CONFIRMACION</h1>
                <div className='mb-5'>
                    Su pedido ha sido enviado correctamente
                </div>
                <h3>Nro orden: <strong>{orderId}</strong></h3>
                <h3 ><Link to="/productos">Volver al Catalogo</Link></h3>
            </div>

        )
    }
    else if (orderStatus === 'processing') {
        return (
            <div className='d-flex justify-content-center'>
                <h1>Procesando</h1>
            </div>
        )
    }

    return (
        <>
            <div className="form">
                <div className="form-floating mb-3 inputContainer">
                    <input type="text" name="name" value={userInfo.name} onChange={getInfo} className="form-control" id="floatingName" placeholder="Name" />
                    <label htmlFor="floatingName">Nombre</label>
                </div>
                <div className="form-floating mb-3 inputContainer">
                    <input type="text" name="lastName" value={userInfo.lastName} onChange={getInfo} className="form-control" id="floatingLastName" placeholder="Last name" />
                    <label htmlFor="floatingLastName">Apellido</label>
                </div>
                <div className="form-floating mb-3 inputContainer">
                    <input type="text" name="address" value={userInfo.address} onChange={getInfo} className="form-control" id="floatingAddress" placeholder="Address" />
                    <label htmlFor="floatingAddress">Direccion</label>
                </div>
                <div className="form-floating mb-3 inputContainer">
                    <input type="text" name="tel" value={userInfo.tel} onChange={getInfo} className="form-control" id="floatingTel" placeholder="Tel" />
                    <label htmlFor="floatingTel">Telefono</label>
                </div>
                <button className="formButton" onClick={() => createOrder()}>Enviar Pedido</button>
            </div>
        </>
    )
}

export default FinishOrder;
