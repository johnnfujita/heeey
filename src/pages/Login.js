import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { connect } from 'react-redux';

import { authLogin } from '../store/actions/auth';
import { Formik, Field } from 'formik';

import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import { TextField, Button, InputAdornment, IconButton } from "@material-ui/core"
import {  Visibility, VisibilityOff } from "@material-ui/icons"
import { cyan } from "@material-ui/core/colors"

import { ArrowIosBackOutline } from "@styled-icons/evaicons-outline/ArrowIosBackOutline"
import styled from "styled-components"
const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: cyan[800],
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: cyan[500]
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: "aaa",
      },
      '&:hover fieldset': {
        borderColor: cyan[500],
      },
      '&.Mui-focused fieldset': {
        borderColor: cyan[500],
      },
    },
  },
})(TextField);
  
  // const theme = createMuiTheme({
  //   palette: {
  //     primary: cyan,
  //   },
  // });

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(cyan[300]),
      backgroundColor: cyan[300],
      width: "100px",
      borderRadius: '20px',
      '&:hover': {
        backgroundColor: cyan[500],
      },
    },
  }))(Button);


const Login = ({authLogin, history}) => {
    

    
    const [state, setstate] = useState({ 
        email: "",
        password: "",
        showPassword: false,
        isRendered: false
    })
   
    
    useEffect(()=> {
        
        setstate({
            
            isRendered: true
        })
    }, [state.isRendered])
    

    
   
    const handleMouseDownPassword = (e) => {
        e.preventDefault();
      };

    const handleClickShowPassword = (e) => {
        e.preventDefault();
        setstate({...state, showPassword: !state.showPassword });
    }
    
    return (
        <div className="auth-container">
            <div className="auth-back-to-microapp">
                <Link className="auth-microapp-logo-container" to="/">
                  <BackIcon size={44} />
                  <img className="auth-microapp-logo" src={require("../assets/images/HEEEY.svg")}/>
                </Link>
            </div>
            <div className="title-and-form">
                <div className="title">Login</div>

                <div className={state.isRendered ? "auth-box auth-box-rendered" : "auth-box"}>
                    <div className="logo-container">

                        <img className="login-logo-microappollis" src={require("../assets/images/microappollis-black-letters.jpg")}/>

                    </div>
                    <Formik

                        initialValues={{ email: '', password: ""}} 
                        onSubmit={(data, {setSubmitting, resetForm}) => {
                            setSubmitting(true);
                            console.log(data, "adjso");
                            authLogin(data.email, data.password)
                            setSubmitting(false);
                            resetForm()
                    }}
                    >
                        {({values, isSubmitting, handleSubmit}) => (
                            <form className="form-container" onSubmit={handleSubmit}>
                                <Field 
                                    required
                                    name="email" 
                                    as={CssTextField} 
                                    type="input" 
                                    label="email" 
                                    variant="outlined" 

                                />
                                <Field
                                    required
                                    style={{marginTop: "12px"}}
                                    variant="outlined"
                                    as={CssTextField}
                                    name="password"
                                    label="senha"
                                    type={state.showPassword ? 'text' : 'password'}
                                    InputProps={{
                                        endAdornment: (
                                      <InputAdornment position="end">
                                        <IconButton

                                          onClick={handleClickShowPassword}
                                          onMouseDown={handleMouseDownPassword}
                                        >
                                          {state.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                      </InputAdornment>
                                    ),}}
                                />
                                <div className="login-button-container">   
                                    <ColorButton color="primary"  disable={isSubmitting.toString()} type="submit">Entrar</ColorButton>
                                <div className="login-forget-register">
                                    <div className="login-issues-item-container"><p>Não é membro?&nbsp; &nbsp;</p><Link to="/microappollis/register/"> Registre Aqui!</Link></div>
                                    <div className="login-issues-item-container"><p>Esqueceu a Senha?&nbsp; &nbsp;</p><Link to="/microappollis/password-reset/"> Recupere Aqui!</Link></div>
                                </div>
                                </div>
                            </form>

                        )}

                    </Formik>
                                        
                </div>
            </div>    
            <div className="login-bottom-content">
                  
                <p>The source code is licensed MIT, available at <a href="https://github.com/johnnfujita/virtualdemocracies-backend">Github</a></p>                             
                <p> by <a href="https://microappollis.com">Microappollis</a>.</p>
            </div>
            
        </div>
       
    )
}
const mapStateToProps = state => ({
  isAutheticated: state.auth.isAutheticated,
})
export default connect(mapStateToProps,{ authLogin})(Login);


const BackIcon = styled(ArrowIosBackOutline) `
    color:#aeaeae
`