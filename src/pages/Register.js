import React, { useState, useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";

import {connect } from 'react-redux';

import { register } from '../store/actions/auth';
import { Formik, Field } from 'formik';

import styled from 'styled-components'
import { ArrowIosBackOutline } from "@styled-icons/evaicons-outline/ArrowIosBackOutline"

import { withStyles, ThemeProvider, createMuiTheme, makeStyles} from "@material-ui/core/styles";
import { TextField, FormControl, InputLabel, Select,MenuItem, Button, InputAdornment, IconButton } from "@material-ui/core"
import {  Visibility, VisibilityOff } from "@material-ui/icons"
import { cyan } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[500],
    },
  },
});



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


const Register = ({ register, history}) => {
    
    
    const [stateRender, setStateRender ] = useState({isRendered: false});
    useEffect(()=> {
       
        setStateRender({
            
            isRendered: true
        })
    }, [stateRender.isRendered])
    

    const [statePasswd, setStatePasswd ] = useState({showPassword:false});
    const [accountCreated, setAccountCreated] = useState(false);

    
  
    if (accountCreated) {
        return <Redirect to="/vidas/login" />
    }
   
  

    
   
    const handleMouseDownPassword = (e) => {
        e.preventDefault();
      };

    const handleClickShowPassword = (e) => {
        e.preventDefault();
        setStatePasswd({...statePasswd, showPassword: !statePasswd.showPassword });
    }
    
    return (
        <div className="register-auth-container">
          <div className="auth-back-to-microapp">
          <Link className="auth-microapp-logo-container" to="/">
                  <BackIcon size={44} />
                  <img className="auth-microapp-logo" src={require("../assets/images/HEEEY.svg")}/>
                </Link>
            </div>
            <div className="register-title-and-form">
                <div className="register-title">Cadastro</div>

                <div className={stateRender.isRendered ? "register-auth-box register-auth-box-rendered" : "register-auth-box"}>
                    <div className="register-logo-container">

                        <img className="register-login-logo-microappollis" src={require("../assets/images/microappollis-black-letters.jpg")}/>

                    </div>
                    <Formik

                        initialValues={{  
                            email: "", 
                            password: "", 
                            re_password: "",
                            name: "",
                            cpf: "",
                            address_street:"",
                            address_number: "",
                            complement: "",
                            card_holder_name: "",
                            card_number: "",
                            card_expiration: "",
                            card_type: "",
                            card_security_code: "",
                            card_brand: "" 
                    }} 
                        onSubmit={(data, {setSubmitting, resetForm}) => {
                            
                            setSubmitting(true);
          
                            
                                register(data.email, 
                                    data.password, 
                                    data.re_password,
                                    data.name,
                                    data.cpf,
                                    data.address_street,
                                    data.address_number,
                                    data.complement,
                                    data.card_holder_name,
                                    data.card_number,
                                    data.card_expiration,
                                    data.card_type,
                                    data.card_security_code,
                                    data.card_brand)
                            setSubmitting(false);
                            
                            resetForm()
                            setAccountCreated(true)
                            
                    }}
                    >
                        {({values, isSubmitting, handleSubmit, handleChange}) => (
                            <form className="register-form-container" onSubmit={handleSubmit}>
                                <div className="account-section">
                                <Field 
                                    required
                                    name="email" 
                                    as={CssTextField} 
                                    type="input" 
                                    label="email" 
                                    variant="outlined" 
                                    
                                />
                                <div className="register-password-and-repassword-container">
                                <Field
                                className="register-password-and-repassword"
                                    required
                                    style={{marginTop: "12px"}}
                                    variant="outlined"
                                    as={CssTextField} 
                                    name="password"
                                    label="Senha"
                                    type={statePasswd.showPassword ? 'text' : 'password'}
                                    InputProps={{
                                        endAdornment: (
                                      <InputAdornment position="end">
                                        <IconButton

                                          onClick={handleClickShowPassword}
                                          onMouseDown={handleMouseDownPassword}
                                        >
                                          {statePasswd.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                      </InputAdornment>

                                    ),}}
                                />

<Field
                                    className="register-password-and-repassword"
                                    required
                                    style={{marginTop: "12px"}}
                                    variant="outlined"
                                    as={CssTextField} 
                                    name="re_password"
                                    label="Confirme a senha"
                                    type={statePasswd.showPassword ? 'text' : 'password'}
                                    InputProps={{
                                        endAdornment: (
                                      <InputAdornment position="end">
                                        <IconButton

                                          onClick={handleClickShowPassword}
                                          onMouseDown={handleMouseDownPassword}
                                        >
                                          {statePasswd.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                      </InputAdornment>
                                      
                                    ),}}
                                />

                                </div>
                                

                                
                                </div>
                                <div className="register-profile-section">
                                <div className="register-section-title-container">
                                    <p className="register-section-title">Perfil</p>
                                </div>
                                <div className="container-name-cpf">
                                  <Field 
                                      className="register-name"
                                      required
                                      name="name" 
                                      style={{marginTop: "12px"}}
                                      as={CssTextField}  
                                      type="input" 
                                      label="Nome Completo" 
                                      variant="outlined"
                                          

                                  />

                                  <Field 
                                      className="register-cpf"
                                      required
                                      style={{marginTop: "12px"}}
                                      name="cpf" 
                                      as={CssTextField}  
                                      type="input" 
                                      label="CPF" 
                                      variant="outlined" 

                                  />
                                </div>
                                
                                
                                <Field 
                                    required
                                    name="address_street" 
                                    style={{marginTop: "12px"}}
                                    as={CssTextField}  
                                    type="input" 
                                    label="Nome da Rua" 
                                    variant="outlined" 

                                />
                                <div className="register-number-complement">
                                <Field
                                    className="register-address-num" 
                                    required
                                    name="address_number" 
                                    style={{marginTop: "12px"}}
                                    as={CssTextField} 
                                    type="input" 
                                    label="Número" 
                                    variant="outlined" 

                                />

                                <Field
                                  className="register-address-complement" 
                                    required
                                    name="complement" 
                                    style={{marginTop: "12px"}}
                                    as={CssTextField} 
                                    type="input" 
                                    label="Complemento" 
                                    variant="outlined" 

                                />
                                </div>
                                
                                </div>
                                <div className="register-cardholder-data">
                                  <div className="register-section-title-container">
                                      <p className="register-section-title">Informação de Cobrança</p>
                                  </div>
                                  <div className="register-cardholder-selectors">
                                  <ThemeProvider theme={theme}>
                                  <FormControl variant='outlined' className="register-form-controls">
                                      <InputLabel style={{background: "white", padding:'2px'}}id="demo-simple-select-outlined-label">Forma de Pagamento</InputLabel>
                                      <Select
                                      className="register-form-selectors"
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        name={"card_type"}
                                        value={values.card_type}
                                        onChange={handleChange}
                                      >
                                        <MenuItem value="CreditCard">Crédito</MenuItem>
                                        <MenuItem value="DebitCard">Débito</MenuItem>
                                          
                                      </Select>
                                  </FormControl>

                                  <FormControl variant='outlined' style={{marginTop: "12px"}}className="register-form-controls">
                                      <InputLabel style={{background: "white", padding:'2px'}} id="demo-simple-select-label">Bandeira Cartão</InputLabel>
                                      <Select
                                        className="register-form-selectors"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        name={"card_brand"}
                                        value={values.card_brand}
                                        onChange={handleChange}
                                      >
                                        <MenuItem value="Visa">Visa</MenuItem>
                                        <MenuItem value="MasterCard">Master Card</MenuItem>
                                          
                                      </Select>
                                  </FormControl>
                                          
                                  </ThemeProvider>
                                  </div>
                                  
                                  {/* <Field 
                                      required
                                      name="card_type" 
                                      style={{marginTop: "12px"}}
                                      as={CssTextField} 
                                      type="input" 
                                      label="Forma de pagamento" 
                                      variant="outlined"
                                  

                                  /> */}
                                  {/* <Field 
                                      required
                                      name="card_brand" 
                                      style={{marginTop: "12px"}}
                                      as={CssTextField} 
                                      type="input" 
                                      label="Bandeira Cartão" 
                                      variant="outlined" 

                                  /> */}
                                  <Field 
                                      required
                                      name="card_holder_name" 
                                      style={{marginTop: "12px"}}
                                      as={CssTextField} 
                                      type="input" 
                                      label="Titular" 
                                      variant="outlined" 

                                  />
                                <div className="container-creditcard-data">
                                <Field 
                                      className="register-card-number"
                                      required
                                      style={{marginTop: "12px"}}
                                      as={CssTextField} 
                                      type="input" 
                                      name="card_number"
                                      label="Número do cartão" 
                                      variant="outlined" 

                                  />

                                  <Field 
                                  className="register-card-exp"
                                      required
                                      name="card_expiration" 
                                      style={{marginTop: "12px"}}
                                      as={CssTextField} 
                                      type="input" 
                                      label="Exp" 
                                      variant="outlined" 

                                  />

                                  <Field  
                                      className="register-card-seccode"
                                      required
                                      name="card_security_code" 
                                      style={{marginTop: "12px"}}
                                      as={CssTextField} 
                                      type="input" 
                                      label="CVV" 
                                      variant="outlined" 

                                  />
                                </div>
                                  
                                </div>
                                

                                

                                <div className="register-button-container">   
                                    <ColorButton color="primary"  disable={isSubmitting.toString()} type="submit">Registrar</ColorButton>
                                <div className="register-forget-register">
                                    <div className="register-issues-item-container"><p>Já é membro?&nbsp; &nbsp;</p><Link to="/microappollis/login/"> Accesse Aqui!</Link></div>
                                    <div className="register-issues-item-container"><p>Esqueceu a Senha?&nbsp; &nbsp;</p><Link to="/microappollis/password-reset/"> Recupere Aqui!</Link></div>
                                </div>
                                </div>
                            </form>

                        )}

                    </Formik>
                                        
                </div>
            </div>    
            <div className="register-bottom-content">
                  
                <p>The source code is licensed MIT, available at <a href="https://github.com/johnnfujita/virtualdemocracies-backend">Github</a></p>                             
                <p> by <a href="https://microappollis.com">Microappollis</a>.</p>
            </div>
            
        </div>
       
    )
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { register})(Register);


const BackIcon = styled(ArrowIosBackOutline) `
    color:#aeaeae
`