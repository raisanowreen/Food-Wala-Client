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
            <h1>Add a new food item</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

            <input type="text" {...register("name")} placeholder="food name"/>  
      <textarea {...register("details")} placeholder="food details"/>
      <input type="number" {...register("price")} placeholder="food price"/>
            <input type="text" {...register("img")} placeholder="food image url" />
      <input type="submit" />
</form>
        </div>
    );
};

export default AddItem;