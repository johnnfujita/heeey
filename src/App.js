import React, { useState, useEffect} from 'react';
import {  useLocation ,Route, Switch } from 'react-router-dom';
import "./styles/App.scss";
import gsap from "gsap"
// importing components
import Header from "./components/Header";
import Home from "./pages/Home"
import ProfilePage from "./pages/ProfilePage"
import Login from "./pages/Login"
import PersonalityPage from "./pages/PersonalityPage"
import BookHeeey from "./pages/BookHeeey";
import PageNotFound from "./pages/PageNotFound";

import PrivateRouteWrapper from "./components/PrivateRouteWrapper"
import AuthContext from "./context/AuthContext";
import Register from './pages/Register';


function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms)
  }
}

const routes = [
  {path: "/", name: "Home", Component: Home},
  
  {path: "/personality/:id", name: "Personality", Component: PersonalityPage},
  {path: "/book/:id", name: "Booking", Component: BookHeeey},
 
  {path: "/microappollis/login", name: "Login", Component: Login },
  {path: "/microappollis/register", name: "Register", Component: Register },
  {path: "", name: "404page", Component: PageNotFound},
]

const privateRoutes = [
  {path: "/profile", name: "ProfilePage", Component: ProfilePage}
]

function App() {
  let location = useLocation()

  var authRoutesRegex  = /\/microappollis(\/.*)$/

  
  
  const [auth, setAuth] = useState(false);
  gsap.to("body", 0, {css: { visibility: "visible"}});
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(()=> {
    
    let vh = dimensions.height * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    
   
    const debounceHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 500)
    window.addEventListener("resize", debounceHandleResize);

    return () => {
      window.removeEventListener("resize", debounceHandleResize);
    }
  });

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
    <div className="App">
        {authRoutesRegex.test(location.pathname) ? null :<Header />}
        <Switch>
        {privateRoutes.map(({path, Component}) => (
          <PrivateRouteWrapper  exact path={path} component={Component} dimensions={dimensions} />
        ))}
        { 
          routes.map(({path,name, Component}) => 
            (<Route key={name}  exact path={path} render={(props)=><Component {...props} dimensions={dimensions}/>} />
              
            )
          )
          
        }
        
        </Switch>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
