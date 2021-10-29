import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PlaceOrder = () => {
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
            <div>
            <h1>This is my orders {foodId}</h1>
            <h1>This is my orders {food.name}</h1>
            <button>Cancel My Order</button>
        </div>
        </div>
    );
};

export default PlaceOrder;