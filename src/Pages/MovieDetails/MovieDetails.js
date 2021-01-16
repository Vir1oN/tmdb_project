import React, {useState, useEffect} from 'react'
import {useRouteMatch} from 'react-router-dom'
import {MovieService} from "../../Services";

const buildPosterUrl = (imgPath, width = 200) => `https://image.tmdb.org/t/p/w${width}/${imgPath}`

export default function MovieDetails() {
    const {params} = useRouteMatch();
    const {id} = params;
    const [movie, setMovie] = useState(null);

    const fetchMovie = async (id) => {
        const movie = await MovieService.getMovieById(id);
        setMovie(movie);
    }

    useEffect(() => {
        fetchMovie(id);
    }, []);

    console.log(movie);
    return (
        <div>
            {movie &&
            <>
                <img src={buildPosterUrl(movie.poster_path, 400)} alt={movie.original_title}/>
                <h1>{movie.original_title}</h1>
                <h2>{movie.tagline}</h2>
                <h2>{movie.genres.map(genre => <span key={genre.id}>{genre.name + ' '}</span>)}</h2>
                <h3>{movie.overview}</h3>
            </>
            }
        </div>
    );
}