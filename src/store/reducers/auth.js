import * as actionTypes from "../actions/actionTypes";
import { updateObject } from '../utility';



const initialState = {
    auth_token: null,
    error: null,
    loading: false,
    isAuthenticated: false
}

const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
    })
}

const authSuccess = (state, action) =>{
    console.log("johnnie", action.auth_token)
    return updateObject(state, {
        auth_token: action.auth_token,
        error: null,
        loading: false,
        isAuthenticated: true
    })
}

const authFail = (state, action) => {
    return updateObject(state, {
        auth_token: null,
        error: action.error,
        loading: false
    })
}

const logoutStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    })
}

const logoutSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        auth_token: null,
        isAuthenticated: false
    })
}

const logoutFail = (state, action) => {
    return updateObject(state, {
        auth_token: null,
        loading: false,
        error: action.error
    })
}

const activationFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
        auth_token: null
    })
}

const activationSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: false,
    })
}

const registerSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: false,
    })
}

const registerFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    })
}


const auth = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.LOGOUT_START: return logoutStart(state, action);
        case actionTypes.LOGOUT_SUCCESS: return logoutSuccess(state, action);
        case actionTypes.LOGOUT_FAIL: return logoutFail(state, action);
        case actionTypes.ACTIVATION_FAIL: return activationFail(state, action);
        case actionTypes.ACTIVATION_SUCCESS: return activationSuccess(state, action);
        case actionTypes.REGISTER_SUCCESS: return registerSuccess(state, action);
        case actionTypes.REGISTER_FAIL: return registerFail(state, action);
        default:
            return state;
    }
}
export default auth;