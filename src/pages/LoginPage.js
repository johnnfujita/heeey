import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Redirect } from 'react-router-dom';


const LoginPage = (props) => {
    const Auth = useContext(AuthContext);
    return (
        !Auth.auth ? (<div className="login-container">
        loga ai padrin</div>) : (<Redirect to="/profile" />) 
    )
}

export default LoginPage

