import React, {useState, useEffect} from 'react'
import axios from '../requestFabric';
import { Link } from "react-router-dom";
import ScrollContainer from "react-indiana-drag-scroll"
const Row = ({ title, artistList, fetchUrl, isLargeRow}) => {
    
    const [opacity, setOpacity] = useState(0)
    
    const [movies, setMovies] = useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/original/"
    
    
    useEffect(() => {
        async function fetchData() {
            setOpacity(1)
            console.log(fetchUrl)
            const res = await axios.get(fetchUrl)

            console.log(res.data.results)
            console.log("johnnie here")
            setMovies(res.data.results)
            return res
        }
        fetchData()
        
    }, [fetchUrl])

    return (
        <div className={`outside-row-container ${isLargeRow ? "" : "outside-row-container-backdrop"}`}>
            <h2 className="app-title">{title}</h2>
            <div className="app-row">

                <ScrollContainer vertical={false} className="row-container">
                    {artistList.length > 0 ? artistList.map((person, idx) => 
                    ( <>
                        <Link to={`/personality/${person.id}`}key={person.id} className="row-content" style={{opacity: opacity}}>
                                    <div className="element-image-container">
                                        <img src={require(`../assets/images/${person.profilePic}.jpg`)} alt={person.nome} className="element-image"/>
                                        <div className="overlay-area">
                                            <div className="price-tag">R${person.price}</div>
                                        </div>
                                    </div>
                                    <div className="element-text">
                                    <div className="element-title">{person.nome}</div>
                                        <div className="element-categorie">{person.bestKnownFor}</div>
                                    </div>
                                </Link>
                        
                    </>
                    )) : movies.map((movie, idx) => 
                    (
                        <div key={idx} className="row-content">
                            <img className="movie-poster" src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={idx} />
                            <p className="movie-name">
                            {movie.title ? movie.title : movie.name}
                            </p>
                        </div>
                    ))}
                </ScrollContainer>
            </div>
        </div>
        
    )
}

export default Row
