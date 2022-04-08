import { useState, useEffect } from "react";
import { getProductsById } from '../../asyncmock';
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductsById(5).then((props) => {
            setProducts(props);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <>
        <ItemDetail img={products.img} name={products.name} description={products.description} price={products.price} stock={products.stock} />
    </>
  );
};

export default ItemListContainer;