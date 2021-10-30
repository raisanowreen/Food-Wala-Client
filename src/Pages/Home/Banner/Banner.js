import React from 'react';

const Banner = () => {
    return (
<div>
  <div class="card bg-warning text-white image-sizing">
  <img src="https://i.ibb.co/X51sg2m/Untitled-designg.png" height="760" class="card-img" alt="..."/>
  <div class="card-img-overlay">
  <div>
  <h1 className="mt-5 mb-5 pt-5 text-white">Your Food Is FoodWala's Responsibility</h1>
  <div class="input-group mb-3 p-3 w-sm-50 w-md-50 bg-white rounded">
  <input type="text" class="form-control p-3" placeholder="Search Food Types" aria-label="Recipient's username with two button addons"/>
  <button type="button" class="btn btn-dark px-5">Delivery</button>
  </div>
</div>
  </div>
</div>
</div>
    );
};

export default Banner;