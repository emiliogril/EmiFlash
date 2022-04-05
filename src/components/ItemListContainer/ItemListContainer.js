import { useState, useEffect } from 'react';
import { getProducts } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import"./ItemListContainer.css";


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((prods) => {
            setProducts(prods);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <>
        <h1 className="titulo">{props.titulo}</h1>
            <ItemList products={products} />
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

