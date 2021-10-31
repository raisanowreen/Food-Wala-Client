import React from 'react';

const FoodWalaApp = () => {
    return (
        <div className="d-flex flex-sm-wrap flex-md-nowrap flex-wrap justify-content-around align-items-center bg-white ps-5 pe-5">
            <div>
                <h1 className="text-warning">Download FoodWala App <br />
                For Latest Updates</h1>
                <p>It's all at your fingertips – the restaurants and shops you love. <br />
                    Find the right food and groceries to suit your mood, and make the first bite last. <br />
                    Go ahead, download us.</p>
                <button type="button" className="btn btn-warning py-3 mb-2"><i class="fab fa-apple me-2"></i>Download on App Store</button> <br />
                <button type="button" className="btn btn-warning py-3 mb-2"><i class="fab fa-google-play me-2"></i>Get in on Google Play</button><br />
                <button type="button" className="btn btn-warning py-3"><i class="fas fa-shopping-bag me-2"></i>Explore App Gallery</button>
            </div>
            <div>
                <img src="https://i.ibb.co/yS5VsWM/dfvgfgv.png" height="490" alt="" />
            </div>
        </div>
    );
};

export default FoodWalaApp;