import { useState, useEffect } from "react";
import { getDocs, collection, query, where, limit, orderBy,} from "firebase/firestore";
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
      ? query(
          collection(firestoreDb, "products"),
          where("category", "==", categoryId),
          where("price", "==", 800)
        )
      : query(
          collection(firestoreDb, "products"),
          orderBy("name", "desc"),
          limit(8)
        );

    getDocs(collectionRef).then((response) => {
      console.log(response);
      const products = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setProducts(products);
    });
  }, [categoryId]);

  if (products.length === 0) {
    return <h1 className="noHay">No hay productos</h1>;
  }

  return (
    <>
      <h1 className="titulo">Bienvenido a la Ropa indumentaria</h1>
      <h2 className="subTitulo">{title}</h2>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
