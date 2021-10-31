import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './FoodOptions.css';



const FoodOptions = () => {
    const [foods, setFoods] = useState([]);
    const {user} = useAuth();

    useEffect(()=>{
        fetch('https://peaceful-retreat-36189.herokuapp.com/foods')
        .then(res => res.json())
        .then(data => {
            setFoods(data)
        })
    },[]);

const handleAddToCart =(index)=>{
    const data = foods[index];
    data.email = user.email;
    data.status = "pending"

    fetch('https://peaceful-retreat-36189.herokuapp.com/myOrders', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(data),
    });
}

    return (
      // Food options from database api
        <div className="bg-white pb-5 custom-position">
          <h1 className="mt-5 mb-5 pt-5 text-warning text-center ms-3 me-3">What Type Food You Want To Deliver?</h1>  
        <div>
                    {
                        foods.map((food, index)=> <div className="card mb-2 bg-warning w-75 mx-auto">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img src={food.img} className="img-fluid rounded-start" height="300px" alt="..."/>
                          </div>
                          <div className="col-md-8">
                            <div className="card-body mt-5 pt-3">
                              <h5 className="card-title mt-5">Type: {food.name}</h5>
                              <p className="card-text">Details: {food.details}</p>
                              <p className="card-text mb-3 mt-5">Delivery charge: {food.price}</p>
                              <Link to={`/placeOrder/${food._id}`}><button className="btn btn-dark px-5 mt-5" onClick={()=>handleAddToCart(index)}>Select Now</button></Link>
                            </div>
                          </div>
                        </div>
                      </div>)
                    }
                </div>
        </div>
    );
};

export default FoodOptions;