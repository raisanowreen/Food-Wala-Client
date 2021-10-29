import React from 'react';
import { Link } from 'react-router-dom';

const Food = (props) => {
    const {name, details, img, _id} = props.food
    return (
        <div className="product">
            <div>
                <img src={img} alt="" height="200" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p>{details}</p>
              
                <br />
               <Link to={`/placeOrder/${_id}`}> <button>Review My Order</button></Link>
            </div>
        </div>
    );
};

export default Food;