import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/orders')
        .then(res=> res.json())
        .then(data => setAllOrders(data));
    },[])


    const handleDelete = id =>{
        const url= `http://localhost:5000/orders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){
                alert('Deleted');
                const remaining = allOrders.filter(allOrder => allOrder._id !== id);
                setAllOrders(remaining)
            }
        })
    }
    return (
        <div>
            <h1>This are users' orders.</h1>
            {
                allOrders.map(allOrder => <div><h1>{allOrder.name}</h1><h1>{allOrder.email}</h1><h1>{allOrder.food}</h1><button onClick={()=> handleDelete(allOrder._id)}>Delete order</button></div>)
            }
        </div>
    );
};

export default ManageAllOrders;