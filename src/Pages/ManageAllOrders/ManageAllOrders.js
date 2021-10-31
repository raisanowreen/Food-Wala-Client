import React, { useEffect, useState } from 'react';
import {Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() =>{
        fetch('https://peaceful-retreat-36189.herokuapp.com/orders')
        .then(res=> res.json())
        .then(data => setAllOrders(data));
    },[])


    const handleDelete = id =>{
        const url= `https://peaceful-retreat-36189.herokuapp.com/orders/${id}`
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
            
            <h1 className="mt-5 mb-5 pt-5 text-white text-center ms-3 me-3">Check Our Customers' Purchases</h1>
            {
                allOrders.map(allOrder => <Table className="m-5 w-75 mx-auto bg-white" striped bordered hover>
                <thead className="text-center text-dark">
                  <tr>
                    <th>User Id</th>
                    <th>User Name</th>
                    <th>Food Type</th>
                    <th>City</th>
                    <th>Order Status</th>
                    <th>Admin</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center text-white">
                    <td>{allOrder._id}</td>
                    <td>{allOrder.name}</td>
                    <td>{allOrder.food}</td>
                    <td>{allOrder.city}</td>
                    <td>{allOrder.status}</td>
                    <td><button type="button" className="btn btn-warning" onClick={()=> handleDelete(allOrder._id)}>Delete order</button></td>
                  </tr>   
                </tbody>
              </Table>)
            }
        </div>
    );
};

export default ManageAllOrders;