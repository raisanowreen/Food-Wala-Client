import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();


useEffect(()=>{
    fetch(`http://localhost:5000/myOrders/${user.email}`)
    .then(res =>res.json())
    .then(data=>{
        setOrders(data);
    })
},[]);   


const handleDelete = id =>{
    const url= `http://localhost:5000/myOrders/${id}`
    fetch(url, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if(data.deletedCount){
            alert('Deleted');
            const remaining = orders.filter(order => order._id !== id);
            setOrders(remaining)
        }
    })
}

    return (
        <div>
           <h1>{orders.length}</h1>
            {
                 
                    orders.map((order, index) => <div><h1>{order.name}</h1><h1>{order.email}</h1><button onClick={()=> handleDelete(order._id)}>Cancel my order</button></div>)
                
            }
        </div>
    );
};

export default MyOrders;