import { useState, useEffect } from 'react';
import { getProducts } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import"./ItemListContainer.css";
import { useParams } from "react-router-dom";


const ItemListContainer = (props) => {
    const [products, setProductsId] = useState([]);

    const { setProducts: categoryId } = useParams();

    useEffect (()=>{
      getProducts(categoryId).then(product =>{
        setProductsId(product)
      })
  },[categoryId])

    return (
        <>
        <h1 className="titulo">{props.titulo}</h1>
        {products.length > 0 ?
            <ItemList products={products} />
            :
            <div className="text-center m-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      }
    </>
  );
};

export default ItemListContainer;



// ESTO LA VERSION ANTERIOR ITEMCOUNT

// import"./ItemListContainer.css";
// import ItemCount from "../ItemCount/ItemCount";

// const ItemListContainer = (props) => {
//     const handleOnAdd = (quantity) => {
//         console.log(`Se compro ${quantity} productos`);
//       };
//     return (
//         <>
//         <h1 className="titulo">{props.titulo}</h1>
//         <div className="container">
//         <div className="card">
//           <div className="card-body">
//             <h5 className="card-title">Jersey Adictos a la Bici</h5>
//             <p className="card-text">
//               Precio: <b>$8000</b>
//             </p>
//             <ItemCount initial={1} stock={5} onAdd={handleOnAdd} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ItemListContainer;

