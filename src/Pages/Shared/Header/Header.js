import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <div className=" custom-background">
            <nav class="navbar navbar-expand-lg navbar-light bg-white w-100 mx-auto mt-5 mb-5 rounded">
  <div class="container-fluid">
  <img src="https://i.ibb.co/s2q2LZF/Food3.png" alt="" height="100" class="d-inline-block align-text-top me-5 ms-5"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-6">
        <li class="nav-item">
          <Link class="nav-link active me-2" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active me-2" aria-current="page" to="/home">Contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active me-2" aria-current="page" to="/home">Register Company</Link>
        </li>
       { user.email &&
         <ul class="navbar-nav"> <li class="nav-item">
          <Link class="nav-link active me-2" aria-current="page" to="/myOrders">My Orders</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active me-2" aria-current="page" to="/manageAllOrders">Manage All Orders</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active me-2" aria-current="page" to="/addItem">Add a New Item</Link>
        </li></ul>
        }
      </ul>
      <li class="d-flex nav-item fs-4">
      {user.email && <span style={{ color: 'orange' }}>Hello {user.displayName}! </span>}
                {
                    user.email ?
                        <button type="button" className="btn btn-dark ms-4" onClick={logOut}>log out</button>
                        :
                        <Link to="/login"><button type="button" class="btn btn-warning">Login</button>
                        </Link>}
        </li>
     
     
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;