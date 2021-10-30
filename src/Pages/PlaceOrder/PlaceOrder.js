import axios from 'axios';
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



    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data)

        axios.post('http://localhost:5000/orders', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('Order Placed Successfully');
                reset();
            }
        }
        )};

        
    return (
        <div>
                        <h1 className="text-white fs-3 mb-5 text-center">Fill up the form to purchase this food type!</h1>

            <div className="d-flex flex-sm-wrap flex-md-nowrap flex-wrap">
            <div className="card mb-5 bg-warning w-75 mx-auto ms-5">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img src={food.img} className="img-fluid rounded-start" height="300px" alt="..."/>
                          </div>
                          <div className="col-md-8">
                            <div className="card-body mt-5">
                              <h5 className="card-title">Type: {food.name}</h5>
                              <p className="card-text">Details: {food.details}</p>
                            </div>
                          </div>
                        </div>
                      </div>
            <div className="ps-3 pt-3">

            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

<p><input className="p-2 rounded me-3 mb-2" defaultValue={user.displayName} {...register("name")} />
<input className="p-2 rounded" defaultValue={user.email} {...register("email", { required: true })} /></p>
<p><input className="px-5 py-2 rounded text-center" defaultValue={food.name} {...register("food", { required: true })} /></p>
<input className="p-2 rounded me-3 mb-3" placeholder="Address" defaultValue="" {...register("address")} />
<input className="p-2 rounded mb-2" placeholder="City" defaultValue="" {...register("city")} />
<input className="p-2 rounded me-3 mb-2" placeholder="phone number" defaultValue="" type="number" {...register("phone")} />
<input className="p-2 rounded" defaultValue="Pending" {...register("status")} />
<p><input className="mt-3 p-2 rounded bg-warning" type="submit" value="Purchase Food Option" /></p>
</form>
        </div>
        </div>
        </div>
    );
};

export default PlaceOrder;