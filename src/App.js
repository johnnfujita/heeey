import React from 'react';
import {  Route } from 'react-router-dom';
import "./styles/App.scss";

// importing components
import Header from "./components/Header";
import Home from "./pages/Home"
import ProfilePage from "./pages/ProfilePage"
import LoginPage from "./pages/LoginPage"


const routes = [
  {path: "/", name: "Home", Component: Home },
  {path: "/profile", name: "Profile", Component: ProfilePage },
  {path: "/login", name: "Login", Component: LoginPage }

]

function App() {
  return (
    <div className="App">
        <Header />
        {
          routes.map(({path, Component}) => 
            (<Route key={path} exact path={path}>
              <Component/>
            </Route>)
          )
        }
    </div>
  );
}

export default App;
