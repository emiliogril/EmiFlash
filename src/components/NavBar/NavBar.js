import "./NavBar.css";
import "../CartWidget/CartWidget.js";
import CartWidget from "../CartWidget/CartWidget.js";
import { NavLink } from "react-router-dom";
import * as bootstrap from 'bootstrap';
import { useState, useEffect } from "react";
import { getCategories } from "../../../src/asyncmock";
import { firestoreDb } from '../../services/firebase'
import { getDocs, collection, orderBy } from 'firebase/firestore'


const NavBar = () => {
    const [categories, setCategories] = useState([])
  
    useEffect(() => {
    //   getCategories().then(categories => {

    getDocs(collection(firestoreDb, 'categories'), orderBy("order", "asc")).then(response => {
        const categories = response.docs.map(doc => {
          return { id: doc.id, ...doc.data()}
        })
        setCategories(categories)
      })
    }, [])


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container-fluid">
        <img src="../images/logo.png" alt="" width="200" />
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">

            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav" >
                <ul className="navbar-nav ms-5" >
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/quiensoy" className="nav-link">Quien Soy?</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/productos" className="nav-link">Productos</NavLink>
                    </li>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <li><div className="categories navbar-nav ms-auto">
            { categories.map(cat => <NavLink className="nav-link" key={cat.id} to={`/category/${cat.id}`}>{cat.description}</NavLink>)}
          </div></li>
        </div>
        </ul>
            </div>
            <CartWidget />
        </div>
    </nav>
    );
};

export default NavBar;