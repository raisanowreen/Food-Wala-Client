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
            <h1>This is login</h1>
            <button onClick={handleGoogleLogIn}>Google Login</button>
        </div>
    );
};
export default Login;