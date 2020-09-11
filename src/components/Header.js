import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

import styled from "styled-components"
import { Search } from "@styled-icons/evaicons-solid/Search"



const Header = (props) => {

    const [isSearching, setIsSearching] = useState(false);
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    
    const onHandleSearchClick = () => {
        setIsSearching(!isSearching);
        setIsMenuOpened(false);
    }
    const onHandleMenuClick = () => {
        setIsMenuOpened(!isMenuOpened);
        setIsSearching(false);
       
    }

    return (
        <header className="header-container">
            <div className="container-right">
                <NavLink className="header-anchor" to="/"><img className="header-logo" src={require("../assets/images/HEEEY.svg")}/></NavLink>
            </div>
            <div className="container-left">
                { isMenuOpened ?  null : (<div onClick={onHandleSearchClick} className="search-button-container">
                    {isSearching ? 
                    (<div className="search-close-button">X</div>) : (<SearchIcon size={18} />) 
                    }
                    
                </div>) }
                {
                    isSearching ? 
                    null : (<div onClick={onHandleMenuClick} className="hamburger-menu-clickable">
                    {isMenuOpened ?(<div className="hamburger-close-button">X</div>) : (
                    <div className="hamburger-menu">
                    <div className="hamburger-stripe"></div> 
                    <div className="hamburger-stripe"></div>
                    <div className="hamburger-stripe"></div>
                    </div>
                    ) 
                }
                </div>)
                }
                
                <div  className="input-container">
                    <SearchIcon size={18} />
                    <input className="input-box" type="text" placeholder="Busca..."/>
                </div>
                <div className="container-left-anchors">
                    <NavLink className="header-anchor" to="/profile">Profile</NavLink>
                    <NavLink className="header-anchor" to="/microappollis/login">Login</NavLink>
                </div>
            </div>
            {
                isSearching || isMenuOpened ? (
                    
                    <div className="header-bottom-container">
                        {   isSearching ? (
                            <div className="input-container">
                                <SearchIcon size={18} />
                                <input className="input-box" type="text" placeholder="Busca..."/>
                            </div>
                        ) : null
                    }
                        {
                            isMenuOpened ? ( 
                            <div className="container-left-anchors">
                                <NavLink className="header-anchor" to="/profile">Profile</NavLink>
                                <NavLink className="header-anchor" to="/microappollis/login">Login</NavLink>
                            </div>
                            ) : null
                        } 
                    
                    </div>
                ) : null
            }
            
        </header>
    )
}

export default Header

const SearchIcon = styled(Search)`
    color: white;
`