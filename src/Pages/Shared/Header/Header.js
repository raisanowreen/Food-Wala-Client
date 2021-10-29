import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
       { user.email &&
         <ul class="navbar-nav"> <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/myOrders">My Orders</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/manageAllOrders">Manage All Orders</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/addItem">Add a New Item</Link>
        </li></ul>
        }
      </ul>
      <li class="nav-item">
      {user.email && <span style={{ color: 'black' }}>Hello {user.displayName} </span>}
                {
                    user.email ?
                        <button onClick={logOut}>log out</button>
                        :
                        <Link to="/login">Login</Link>}
        </li>
     
     
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;