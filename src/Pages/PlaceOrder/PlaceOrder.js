import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const { foodId } = useParams();
    const [food, setFood] = useState({ });

    useEffect( () =>{
        fetch(`http://localhost:5000/foods/${foodId}`)
        .then(res => res.json())
        .then(data => setFood(data))
    }, [foodId]);


    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div>
            <div>
            <h1>This is my orders {foodId}</h1>
            <h1>This is my orders {food.name}</h1>
            <button>Cancel My Order</button>
        </div>
        <div>
        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

<input defaultValue={user.displayName} {...register("name")} />

<input defaultValue={user.email} {...register("email", { required: true })} />
{errors.email && <span className="error">This field is required</span>}
<input placeholder="Address" defaultValue="" {...register("address")} />
<input placeholder="City" defaultValue="" {...register("city")} />
<input placeholder="phone number" defaultValue="" {...register("phone")} />

<input type="submit" value="Place My Order" />
</form>
        </div>
        </div>
    );
};

export default PlaceOrder;