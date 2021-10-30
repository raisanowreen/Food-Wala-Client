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
        <div className="m-5">
              <h1 className="mt-5 mb-5 pt-5 text-white text-center">Please login first!</h1>

              <div className="input-group mb-3 w-50 mx-auto">
  <input type="text" className="form-control" placeholder="Login with email or number" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button className="btn btn-warning" type="button" id="button-addon2">Button</button>
</div>
            <div className="d-flex justify-content-center">
            <button onClick={handleGoogleLogIn} type="submit" className="btn btn-warning px-5 mb-5">Login with Google</button>
</div>
        </div>
    );
};
export default Login;