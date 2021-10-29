import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MyOrders = () => {
    const { foodId } = useParams();
    const [food, setFood] = useState({ });

    useEffect( () =>{
        fetch('/foods.json')
        .then(res => res.json())
        .then(data => {
            const f = data.find(s => s.price == foodId)
            setFood(f)
        })
    }, [foodId]);
    return (
        <div>
            <h1>This is my orders {foodId}</h1>
            <h1>This is my orders {food.name}</h1>
            <button>Cancel My Order</button>
        </div>
    );
};

export default MyOrders;