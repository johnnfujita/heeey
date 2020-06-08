import React, {useEffect, useState} from 'react'


import { Link } from "react-router-dom"

let artistJson = require("../mockdata/personalidades.json");
let artistList = artistJson.personalidades; 



const Home = (props) => {
    console.log(props.dimensions.width / 180)
    
    const [state, setstate] = useState(0)
    useEffect(() => {setstate(1)},[])
    return (
        
        <div className="home-container">
            <div className="jumbotron-container">
                <div className="jumbotron-content"></div>
            </div>
            <div className="row-section-container">
                <div className="row-area">
                    <div className="row-header">
                        <div className="category-title">Música</div>
                        <div className="seeall-button">mais</div>
                    </div>
                    <div className="row-content">
                        
                        {artistList.map((person, idx) => { 
                            
                            return idx+1 <= window.innerWidth / 200 ? (
                                    
                                <Link key={person.id} className="row-element-container" style={{opacity: state}}>
                                    <div className="element-image-container">
                                        <img src={require(`../assets/images/${person.profilePic}.jpg`)} alt={person.nome} className="thumbnail-personality"/>
                                        <div className="overlay-area">
                                            <div className="price-tag">R${person.price}</div>
                                        </div>
                                    </div>
                                    <div className="element-text">
                                    <div className="element-title">{person.nome}</div>
                                        <div className="element-categorie">{person.descricao[0]}</div>
                                    </div>
                                </Link>
                                
                            ) : ""
                           
                        })
                        
                        }
                        

                    </div>
                </div>

                <div className="row-area">
                    <div className="row-header">
                        <div className="category-title">Música</div>
                        <div className="seeall-button">mais</div>
                    </div>
                    <div className="row-content">
                        
                        {artistList.map((person, idx) => { 
                            return idx+1 <= window.innerWidth / 200 ? (
                               
                                <Link key={person.id} className="row-element-container" style={{opacity: state}}> 
                                    <div className="element-image-container">
                                        <img src={require(`../assets/images/${person.profilePic}.jpg`)} alt={person.nome} className="thumbnail-personality"/>
                                        <div className="overlay-area">
                                            <div className="price-tag">R${person.price}</div>
                                        </div>
                                    </div>
                                    <div className="element-text">
                                    <div className="element-title">{person.nome}</div>
                                        <div className="element-categorie">{person.descricao[0]}</div>
                                    </div>
                                </Link>
                            ) : ""
                        })}
                        

                    </div>
                </div>

                
                <div className="row-area">
                    <div className="row-header">
                        <div className="category-title">Música</div>
                        <div className="seeall-button">mais</div>
                    </div>
                    <div className="row-content">
                        
                        {artistList.map((person, idx) => { 
                            return idx+1 <= window.innerWidth / 200 ? (
                               
                                <Link key={person.id} className="row-element-container" style={{opacity: state}}>
                                    <div className="element-image-container">
                                        <img src={require(`../assets/images/${person.profilePic}.jpg`)} alt={person.nome} className="thumbnail-personality"/>
                                        <div className="overlay-area">
                                            <div className="price-tag">R${person.price}</div>
                                        </div>
                                    </div>
                                    <div className="element-text">
                                    <div className="element-title">{person.nome}</div>
                                        <div className="element-categorie">{person.descricao[0]}</div>
                                    </div>
                                </Link>
                            ) : ""
                        })}
                        

                    </div>
                </div>



            </div>
        </div>
    )
}

export default Home
