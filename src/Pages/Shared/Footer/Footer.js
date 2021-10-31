import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="card bg-dark text-warning fs-5">
  {/* <img src="https://i.ibb.co/N2wmHbq/Untitled-designaq.png" height="660px" className="card-img" alt="..."/> */}
  <div className="card-body-overlay">
  <div className="d-flex flex-sm-wrap flex-md-nowrap flex-wrap justify-content-around align-items-center mt-5">
  <div>
        <h1 className="mb-4">FoodWala Policies</h1>
        <h6>Register as Merchant</h6>
        <h6>Visit our office</h6>
        <h6>COD Charge</h6>
        <h6>Report a complain</h6>
        <h6>Emergency Delivery</h6>
      </div>
      <div className="d-flex justify-content-center">
     <img src="https://i.ibb.co/1sxVyCH/deli.png" height="200" alt="" />
     </div>
      <div>
        <div>
        <div className="d-flex justify-content-center mt-3">
        <button type="button" className="btn btn-warning py-3"><i className="fas fa-mobile-alt me-2"></i>Download Our App</button>
        </div>
        <p className="text-center mt-5"><i className="far fa-copyright"></i>2021. All rights are reserved to <span className=" text-dark">foodwala</span></p>
      </div>
     
      </div>
    </div>
    <div className="m-3">
      
      </div>
      
  </div>
</div>
        </div>
    );
};

export default Footer;