import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App";
import Inicio from "./routes/Inicio";
import QuienSoy from "./routes/QuienSoy";
import ItemDetailContainer from "../src/components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../src/components/ItemListContainer/ItemListContainer";
import Contacto from "./routes/Contacto";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Inicio />} />
              <Route path="quiensoy" element={<QuienSoy />} />
              <Route path="productos" element={<ItemListContainer titulo={"Bienvenido a mi pagina tienda"}/>} />
              <Route path='/category/:categoryId' element={<ItemListContainer titulo={"Productos"}/>} />
              <Route path="/detail/:productId" element={<ItemDetailContainer /> } />
              <Route path="contacto" element={<Contacto />} />
              <Route path="*" element={<h1>NOT FOUND 404</h1>} />
            </Route>
        </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
