import React, {useEffect, useState} from 'react'


import { Link } from "react-router-dom"
import Row from '../components/Row';
import requests from "../requests";

let artistJson = require("../mockdata/personalidades.json");
let artistList = artistJson.personalidades; 



function Home(props) {
  
    
  
    return (
        
        <div className="home-container">
            <div className="jumbotron-container">
                <div className="jumbotron-content"></div>
            </div>
            <div className="row-section-container">
                <Row title="Heeey Famous" artistList={artistList}fetchUrl={requests.fetchTopRated} isLargeRow />
                <Row title="Heeey Famous" artistList={artistList}fetchUrl={requests.fetchTopRated} isLargeRow />
                {/* <div className="row-area">
                    <div className="row-header">
                        <div className="category-title">Música</div>
                        <div className="seeall-button">mais</div>
                    </div>
                    <div className="row-content">
                        
                        {artistList.map((person, idx) => { 
                            
                            return idx+1 <= window.innerWidth / 200 ? (
                                    
                                <Link to={`/personality/${person.id}`}key={person.id} className="row-element-container" style={{opacity: state}}>
                                    <div className="element-image-container">
                                        <img src={require(`../assets/images/${person.profilePic}.jpg`)} alt={person.nome} className="thumbnail-personality"/>
                                        <div className="overlay-area">
                                            <div className="price-tag">R${person.price}</div>
                                        </div>
                                    </div>
                                    <div className="element-text">
                                    <div className="element-title">{person.nome}</div>
                                        <div className="element-categorie">{person.bestKnownFor}</div>
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
                                        <div className="element-categorie">{person.bestKnownFor}</div>
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
                                        <div className="element-categorie">{person.bestKnownFor}</div>
                                    </div>
                                </Link>
                            ) : ""
                        })}
                        

                    </div>
                </div>
 */}


            </div>
        </div>
    )
}

export default Home
