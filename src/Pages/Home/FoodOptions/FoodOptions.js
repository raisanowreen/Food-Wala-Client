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
        <div>
                    {
                        foods.map((food, index)=> <div><h1>{food.name}</h1><h1>{food.price}</h1><Link to={`/placeOrder/${food._id}`}><button onClick={()=>handleAddToCart(index)}>Buy Now</button></Link></div>)
                    }
                </div>
        </div>
    );
};

export default FoodOptions;