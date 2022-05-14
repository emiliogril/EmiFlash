import { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { firestoreDb } from "../../services/firebase";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [title] = useState();

  const { categoryId } = useParams();

  useEffect(() => {
    const collectionRef = categoryId
       ? query(collection(firestoreDb, "products"), where("category", "==", categoryId))
       : collection(firestoreDb, "products")

    getDocs(collectionRef).then(response => {
      console.log(response)
      const products = response.docs.map(doc => {
        return { id: doc.id, ...doc.data()}
      })
      setProducts(products)
    })
}, [categoryId]);

  return (
    <>
      <h1 className="titulo">Bienvenido a la Ropa indumentaria</h1>
      <h2 className="subTitulo">{title}</h2>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
