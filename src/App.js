import React, { useState, useEffect} from 'react';
import {  Route } from 'react-router-dom';
import "./styles/App.scss";
import gsap from "gsap"
// importing components
import Header from "./components/Header";
import Home from "./pages/Home"
import ProfilePage from "./pages/ProfilePage"
import LoginPage from "./pages/LoginPage"
import PersonalityPage from "./pages/PersonalityPage"

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
  {path: "/profile", name: "Profile", Component: ProfilePage },
  {path: "/login", name: "Login", Component: LoginPage },
  {path: "/personality/:id", name: "Personality", Component: PersonalityPage}

]

function App() {
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
    <div className="App">
        <Header />
        {
          routes.map(({path, Component}) => 
            (<Route key={path}  exact path={path} render={(props)=><Component {...props} dimensions={dimensions}/>} />
              
            )
          )
        }
        
    </div>
  );
}

export default App;
