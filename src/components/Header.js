import React from 'react'
import { NavLink } from "react-router-dom";

import styled from "styled-components"
import { Search } from "@styled-icons/evaicons-solid/Search"



const Header = (props) => {
    return (
        <header className="header-container">
            <div className="container-right">
                <NavLink className="header-anchor" to="/"><img className="header-logo" src={require("../assets/images/HEEEY.svg")}/></NavLink>
            </div>
            <div className="container-left">
                <div className="input-container">
                <SearchIcon size={18} />
                <input className="input-box" type="text" placeholder="Busca..."/>
                </div>
            <div className="container-left-anchors">
                <NavLink className="header-anchor" to="/profile">Profile</NavLink>
                <NavLink className="header-anchor" to="/login">Login</NavLink>
            </div>
            </div>
            
        </header>
    )
}

export default Header

const SearchIcon = styled(Search)`
    color: white;
`