import React from 'react';

const Banner = () => {
    return (
<div class="card bg-warning text-white image-sizing">
  <img src="https://i.ibb.co/X51sg2m/Untitled-designg.png" class="card-img" alt="..."/>
  <div class="card-img-overlay">
  <div>
  <h1 className="mt-5 mb-5 pt-5 text-white">Your Food Is FoodWala's Responsibility</h1>
  <div class="input-group mb-3 p-3 mx-auto bg-white rounded">
  <input type="text" class="form-control p-3" placeholder="Search Food Types" aria-label="Recipient's username with two button addons"/>
  <button type="button" class="btn btn-dark px-5">Delivery</button>
  <h3 className="ms-3 me-3 mt-3 fw-light text-warning">Or</h3>
  <button class="btn btn-dark px-5" type="button">Pick up</button>
  </div>
</div>
  </div>
</div>
    );
};

export default Banner;