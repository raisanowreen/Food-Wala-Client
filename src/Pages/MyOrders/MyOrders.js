import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    const {user} = useAuth();

    



useEffect(()=>{
    fetch(`https://peaceful-retreat-36189.herokuapp.com/myOrders/${user.email}`)
    .then(res =>res.json())
    .then(data=>{
        setOrders(data);
    })
},[]);   

useEffect(() =>{
    fetch('https://peaceful-retreat-36189.herokuapp.com/delete')
    .then(res=> res.json())
    .then(data => setOrders(data));
},[])


const handleDelete = id =>{
    const url= `https://peaceful-retreat-36189.herokuapp.com/delete/${id}`
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
              <h1 className="mt-5 text-white text-center mb-3">See Your Orders</h1>

           <h1 className="text-success text-center">Total Orders:{orders.length}</h1>
            {
                 
                    orders.map((order, index) => <div class="card w-75 m-3 mx-auto">
                    <div class="card-body">
                      <h5 class="card-title">Food type:{order.name}</h5>
                      <p class="card-text">Delivery charge: $ {order.price}</p>
                      <p class="card-text">Order status: {order.status}</p>
                      <button class="btn btn-warning px-5" type="button" onClick={()=> handleDelete(order._id)}>Cancel my order</button>  </div>
                  </div>)
                
            }
        </div>
    );
};

export default MyOrders;