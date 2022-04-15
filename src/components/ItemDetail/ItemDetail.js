import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useState } from "react";
import { Link } from "react-router-dom";


 const ItemDetail = ({ img, name, category, description, price, stock }) => {

  const [quantity, setQuantity] = useState(0);

  const handleOnAdd = (count) => {
    setQuantity(count);
    console.log(count)
  };
    // const handleOnAdd = (quantity) => {
    //     console.log(`Se compro ${quantity} productos`);
    //   };


    return (
        <>
        <div className="container">
        <div className="card">
          <img className="picture" src={img} alt={name} />
            <h1 className="card-title">{name}</h1>
            <h5 className="card-title">Descipción: {description}</h5>
            <h6 className="card-title">Categoria: {category}</h6>
            <p className="card-text">Precio $ {price}</p>
            <p className="card-text">Stock: {stock}</p>
            {quantity > 0 ? <Link to="/cart" className="goCart">Ir al carrito</Link> : <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />}
            {/* <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} /> */}
          </div>
        </div>
    </>
  );
};

export default ItemDetail;



// const ItemListContainer = ({ img, name, description, price, stock }) => {

//   const handleOnAdd = (quantity) => {
//       console.log(`Se compro ${quantity} productos`);
//     };
//   return (
//       <>
//       <div className="container">
//       <div className="card">
//         <div className="card-body">
//         <img className="picture" src={img} alt="jersey" />
//           <h5 className="card-title">{name}</h5>
//           <h6 className="card-title">{description}</h6>
//           <p className="card-text">Precio:${price}</p>
//           <ItemCount initial={1} stock={{stock}} onAdd={handleOnAdd} />
//         </div>
//       </div>
//     </div>
//   </>
// );
// };




// const handleOnAdd = (quantity) => {
//   console.log(`Se compro ${quantity} productos`);
// };

// return (
//   <>
//     <div className="contenedor">
//       <img className="picture" src={img} alt="jersey" />
//       <div className="padre-detalles">
//         <div className="detalles">
//           <h5>{name}</h5>
//           <p>{description}<p/>
//             <span className="precio">Precio: <b>$ {price}</b>
//             </span>
//             <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
//           </p>
//         </div>
//       </div>
//     </div>
//   </>
// );
// };