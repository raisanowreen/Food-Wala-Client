import React, { useEffect, useState } from 'react';
import Food from '../../Food/Food';

const FoodOptions = () => {
    const [foods, setFoods] = useState([]);

    

    useEffect(()=>{
        fetch('./foods.json')
        .then(res => res.json())
        .then(data => {
            setFoods(data)
        })
    },[]);

   

    return (
        <div>
           <div>
                <div>
                    {
                        foods.map(food => <Food
                            key={food.price}
                            food={food}
                        >
                        </Food>)
                    }
                </div>
        </div>
        </div>
    );
};

export default FoodOptions;