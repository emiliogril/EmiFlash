import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
// import * as bootstrap from 'bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from "../src/routes/Inicio";
import QuienSoy from "../src/routes/QuienSoy";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Contacto from "../src/routes/Contacto";
import Footer from './components/Footer/Footer';
import { CartContextProvider } from './components/Context/CartContext';
import Cart from './components/Cart/Cart';
import { NotificationProvider } from './components/notification/Notification';


const App = () => {
  return (
    <div className="App">
      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route index element={<Inicio />} />
              <Route path="quiensoy" element={<QuienSoy />} />
              <Route path="productos" element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path="/detail/:productId" element={<ItemDetailContainer /> } />
              <Route path="contacto" element={<Contacto />} />
              <Route path="*" element={<h1>NOT FOUND 404</h1>} />
              <Route path="/cart" element={<Cart />} />
            </Routes>

            <Footer />
          </BrowserRouter>
        </CartContextProvider>
      </NotificationProvider>
    </div>

  );
};

export default App;