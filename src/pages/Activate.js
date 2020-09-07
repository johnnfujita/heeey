import React, { useState } from 'react';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { verify } from '../store/actions/auth';


import { withStyles} from "@material-ui/core/styles";
import { Button  } from "@material-ui/core"

import { cyan } from "@material-ui/core/colors"

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


const Activate = ({verify, match, isAuthenticated}) => {
    

    const [accountVerified, setAccountVerified] = useState(false);
    
    const verifyAccount = e => {
        
        const uid = match.params.uid;
        const token = match.params.token;
        verify(uid, token);
        setAccountVerified(true);
        
    }
    if(isAuthenticated){
        return <Redirect to='/' />
    }

    if (accountVerified) {
        return <Redirect to='/' />
    }
    return (
        <div className="activate-container">
            <div className="activate-logo-container">

                <img className="activate-logo-microappollis" src={require("../assets/microappollis-black-letters.jpg")}/>

            </div>
            <div className="inner-container">
              <h1>Ative sua conta</h1>
              <div className="activate-button-container">
              <ColorButton onClick={verifyAccount} style={{marginTop: "20px"}} type="button" >Ative</ColorButton>
              </div>
             
          </div>
          <div className="activate-bottom-content">
                  
                <p>The source code is licensed MIT, available at <a href="https://github.com/johnnfujita/virtualdemocracies-backend">Github</a></p>                             
                <p> by <a href="https://microappollis.com">Microappollis</a>.</p>
            </div>
        </div>
    );
};


    
export default connect(null, { verify})(Activate);
