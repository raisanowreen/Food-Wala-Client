import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import Food from '../../Food/Food';

const FoodOptions = () => {
    const [foods, setFoods] = useState([]);
    const {user} = useAuth();

    useEffect(()=>{
        fetch('http://localhost:5000/foods')
        .then(res => res.json())
        .then(data => {
            setFoods(data)
        })
    },[]);

const handleAddToCart =(index)=>{
    const data = foods[index];
    data.email = user.email;
    data.status = "pending"

    fetch('http://localhost:5000/myOrders', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(data),
    });
}

    return (
        <div>
          <h1 className="mt-5 mb-5 pt-5 text-warning text-center ms-3 me-3">What Type Food You Want To Deliver?</h1>  
        <div>
                    {
                        foods.map((food, index)=> <div class="card mb-3 bg-warning w-75 mx-auto">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img src={food.img} class="img-fluid rounded-start" height="300px" alt="..."/>
                          </div>
                          <div class="col-md-8">
                            <div class="card-body mt-5">
                              <h5 class="card-title">Type: {food.name}</h5>
                              <p class="card-text">Details: {food.details}</p>
                              <p class="card-text mb-3">Delivery charge: {food.price}</p>
                              <Link to={`/placeOrder/${food._id}`}><button class="btn btn-dark px-5" onClick={()=>handleAddToCart(index)}>Select Now</button></Link>
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