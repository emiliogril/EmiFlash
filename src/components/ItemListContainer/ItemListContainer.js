import { useState, useEffect } from 'react';
import { getProducts } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import"./ItemListContainer.css";
import { useParams } from "react-router-dom";
import * as bootstrap from 'bootstrap';


const ItemListContainer = () => {
    const [products, setProducts] = useState([0]);
    const [title, setTitle] = useState()

    const { categoryId } = useParams();

    useEffect (()=>{
      getProducts(categoryId).then(product =>{
        setProducts(product)
      })
  },[categoryId])

  useEffect(() => {
    setTimeout(() => {
        setTitle('Nuestros productos')
    }, 2000)
})

    return (
        <>
        <h1 className="titulo">Bienvenido a la Ropa indumentaria</h1>
        <h2 className="subTitulo">{title}</h2>
            <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;


