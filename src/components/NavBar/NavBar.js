import "./NavBar.css";
import "../CartWidget/CartWidget.js";
import CartWidget from "../CartWidget/CartWidget.js";
import { NavLink } from "react-router-dom";
import * as bootstrap from 'bootstrap';
import { useState, useEffect } from "react";
import { getCategories } from "../../../src/asyncmock";


const NavBar = () => {
    const [categories, setCategories] = useState([])
  
    useEffect(() => {
      getCategories().then(categories => {
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
        {/* El método map cargo cada una de las categorías trayendolas desde el Async Mock */}
                    <li><div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="categories navbar-nav ms-auto">
                    { categories.map(cat => 
                    <div key={cat.id}><NavLink className="nav-link" to={`/category/${cat.id}`}>{cat.description}</NavLink></div>
                     )} </div></div>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contacto" className="nav-link">Contacto</NavLink></li>
                <li></li>
                </ul>
            </div>
         
            <CartWidget />
        </div>
    </nav>
    );
};

export default NavBar;