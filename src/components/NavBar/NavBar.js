import "./NavBar.css";
import ".//CartWidget/CartWidget.js";
import CartWidget from ".//CartWidget/CartWidget.js";





const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">
        <img src="../images/logo.png" alt="" width="200" /></a>
            <button
            class="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation">

            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav" >
                <ul class="navbar-nav ms-5" >
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Quien Soy?</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contacto</a></li>
                <li></li>
                </ul>
            </div>
            <CartWidget />
        </div>
    </nav>
    );
};

export default NavBar;
