import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIKey } from "../../config/key";
import { Container } from "./StyledDetails";
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom";


function Details(){


    const navigate = useNavigate ()
    const {id} = useParams() //utilizado para recuperar os params após : da url
    const [movie, setMovie] = useState({})
    const image_url = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
       fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=pt-BR`)
      .then(response => response.json())
      .then(data => {
        
        const {title, poster_path, overview, release_date} = data

        const movie = {
            id,
            title,
            sinopse: overview,
            image: `${image_url}${poster_path}`,
            releaseDate: release_date
        }
        setMovie(movie)        
      })
    },[id])//toda vez que o id mudar, a requisação para a API será refeita

    function HandleHome(){
        navigate('/home')
     }


    return(
        <Container>
            <div className="movie">
                <img src={movie.image} alt={movie.sinopse}/>
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.sinopse}</span>
                    <span className="release-date">Data de Lançamento: {movie.releaseDate}</span>
                    <Button onClick={HandleHome}>Voltar</Button>
                </div>
            </div>
        </Container>
    )
}


export default Details