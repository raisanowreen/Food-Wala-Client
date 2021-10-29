import React, { useEffect, useState } from 'react';
import Food from '../../Food/Food';

const FoodOptions = () => {
    const [foods, setFoods] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/foods')
        .then(res => res.json())
        .then(data => {
            setFoods(data)
        })
    },[]);



    return (
        <div>
        <div>
                    {
                        foods.map(food => <Food
                            key={food._id}
                            food={food}
                        >
                        </Food>)
                    }
                </div>
        </div>
    );
};

export default FoodOptions;