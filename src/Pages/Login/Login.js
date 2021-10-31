import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
    console.log('came from', location.state?.from);
    

    const handleGoogleLogIn = () =>{
        signInUsingGoogle()
          .then(result =>{
            history.push(redirect_uri)
            // setUser(result.user);
        })
    }
    return (
       <div>
            <div className="d-flex justify-content-center mb-3">
           <img src="https://i.ibb.co/Ln9Xzgt/mi.png" height="150" alt="" />
           </div>
        <div className="m-5">
              <h1 className="mb-5 text-white text-center">Please login first!</h1>

              <div className="input-group mb-3 mx-auto">
  <input type="text" className="form-control" placeholder="Your Food Company Name" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button className="btn btn-warning" type="button" id="button-addon2">Send</button>
</div>
            <div className="d-flex justify-content-center">
            <button onClick={handleGoogleLogIn} type="submit" className="btn btn-warning px-5 fs-3 mb-5"><i class="fab fa-google me-2 fs-3 p-3"></i>Login with Google</button>
</div>
        </div>
       </div>
    );
};
export default Login;