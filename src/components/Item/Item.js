import "../Item/Item.css";
import { Link } from "react-router-dom";



const Item = ({ id, name, img }) => {
    return (
     
        
        <div className="card">
            <img className="card-img-top" src={img} alt="{name}" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                <Link to={`/detail/${id}`} className="btn btn-outline-secondary">Ver descripción</Link >
                </p>
            </div>
        </div>
    );
};

export default Item;

