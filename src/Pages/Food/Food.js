import React from 'react';
import { Link } from 'react-router-dom';

const Food = (props) => {
    const {name, details, img, price} = props.food
    return (
        <div className="product">
            <div>
                <img src={img} alt="" height="200" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p>{details}</p>
              
                <br />
               <Link to={`/myOrders/${price}`}> <button>Review My Order</button></Link>
            </div>
        </div>
    );
};

export default Food;