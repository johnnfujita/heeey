import * as actionTypes from "./actionTypes"
import axios from 'axios';
import { HOST } from '../../globalConfig';
// import { createWarning, createMessage } from './messages';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = auth_token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        auth_token: auth_token,
        //expiration: token.expiration,
        //refreshToken: token.refreshToken
    }
}


export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const authLogin = (email="djoser", password = "alpine12") => {
    return dispatch => {
        console.log("dfdsafdsf")
        dispatch(authStart());
        axios.post(`${HOST}/vidas/auth/token/login/`, {
            email:email ,
            password: password
        }, {headers:{ "Content-Type": "application/json"}}).then(res => {
            const auth_token = res.data.auth_token;
            console.log(res.data.auth_token)
            localStorage.setItem('auth_token', auth_token)
            //localStorage.setItem('refreshToken', token.refreshToken)
            //localStorage.setItem('expiration', token.expiration)
            
            // dispatch(createMessage({userCreated: "Bem Vindo!"}))
            dispatch(authSuccess(auth_token));
            //dispatch(checkAuthTimeOut(token));
        }).catch( (error) => {
           // dispatch(createWarning(error.error, error.status))
            
            dispatch(authFail(error));
            // dispatch(createWarning(error.response.statusText,error.response.status))
           
        })
    }
}
export const logoutStart = () => {
    return {
        type: actionTypes.LOGOUT_START
    }
}
export const logoutSuccess = () => {
    return {
        type: actionTypes.LOGOUT_SUCCESS,
        auth_token: null,
        //refresh: null,
       // expirationTime: null
    }
}
export const logoutFail = (error) => {
    return {
        type: actionTypes.LOGOUT_FAIL,
        error: error
    }
}

export const logout = (auth_token) => {
    
    return dispatch => {
        dispatch(logoutStart())
        axios.post(`${HOST}/vidas/auth/logout/`, { auth_token: auth_token })
            .then(res =>{
                localStorage.removeItem('auth_token')
                //localStorage.removeItem('refreshToken')
                //localStorage.removeItem('expiration')
                // dispatch(createMessage({logoutSucceded: "Você saiu de sua conta com sucesso!"}))
                dispatch(logoutSuccess());
            })
            .catch(err => {
                // dispatch(createWarning(err.response.statusText, err.response.status ))
                dispatch(logoutFail(err))
            })
    }
}

export const checkAuthTimeOut = auth_token => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout(auth_token));   
        }, 10 * 1000)
    }
}


export const registerSuccess = () => {
    return {
        type: actionTypes.REGISTER_SUCCESS,
        //expiration: token.expiration,
        //refreshToken: token.refreshToken
    }
}


export const registerFail = error => {
    return {
        type: actionTypes.REGISTER_FAIL,
        error: error
    }
}

export const register = (
                    email, 
                    password, 
                    re_password,
                    name,
                    cpf,
                    address_street,
                    address_number,
                    complement,
                    card_holder_name,
                    card_number,
                    card_expiration,
                    card_type,
                    card_security_code,
                    card_brand 
                    ) => {
    return dispatch => {
        dispatch(authStart());
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const body = JSON.stringify({
            email, 
            password, 
            re_password,
            name,
            cpf,
            address_street,
            address_number,
            complement,
            card_holder_name,
            card_number,
            card_expiration,
            card_type,
            card_security_code,
            card_brand 
        })
        axios.post(`${HOST}/vidas/auth/users/`, body, config).then(res => {
            dispatch(registerSuccess());
            // dispatch(createMessage("Registrado com sucesso!"))
            //dispatch(checkAuthTimeOut(auth_token.expiration - Date.now()));
        }).catch( error => {
            // dispatch(createWarning(error.response.statusText, error.response.status ))
            dispatch(registerFail(error))
        })
    }
}


export const verify = (uid, token) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    const body = JSON.stringify({ uid, token });

    try {
        await axios.post(`${HOST}/vidas/auth/users/activation/`, body, config);
        dispatch({
            type: actionTypes.ACTIVATION_SUCCESS,
           
        })
    } catch (err) {
        dispatch({
            type: actionTypes.ACTIVATION_FAIL
        })
    }
}