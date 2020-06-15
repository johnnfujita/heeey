import React, {useContext}   from 'react'
import { Route, Redirect } from 'react-router-dom'

import AuthContext from '../context/AuthContext'

const PrivateRouteWrapper = ({component: Component, ...rest}) => {
    const Auth = useContext(AuthContext);
    return (
        <Route 
        exact
            {...rest}
            render={
                (props) => Auth.auth ? (<Component {...props} />) : (<Redirect to="/login" />) }
        />
    )
}

export default PrivateRouteWrapper
