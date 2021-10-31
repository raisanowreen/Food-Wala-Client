import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const { register, handleSubmit,reset} = useForm();

const onSubmit = data => {
    console.log(data);


    axios.post('http://localhost:5000/foods', data)
    .then(res =>{
        if(res.data.insertedId){
            alert('New Food Added Successfully');
            reset();
        }
    })
}
    return (
        <div>
           <div className="d-flex justify-content-center mb-3">
           <img src="https://i.ibb.co/Ln9Xzgt/mi.png" height="150" alt="" />
           </div>
            <div  className="d-flex flex-sm-wrap flex-md-nowrap flex-wrap justify-content-center">
            <h1 className="text-white text-center mb-3 me-5 ms-5">Add a new food type!</h1>
           
           <form onSubmit={handleSubmit(onSubmit)}>

<p> <input className="px-5 py-2 rounded" type="text" {...register("name")} placeholder="food name"/>  </p>
<textarea className="px-5 rounded" {...register("details")} placeholder="food details"/>
<p>      <input className="px-5 py-2 rounded" type="number" {...register("price")} placeholder="food price"/></p>   
<input className="px-5 py-2 rounded" type="text" {...register("img")} placeholder="food image url" />    
<p>      <input className="px-5 py-2 rounded mb-5 mt-2 bg-warning" type="submit" /></p>
</form>
          
        </div>
        </div>
    );
};

export default AddItem;