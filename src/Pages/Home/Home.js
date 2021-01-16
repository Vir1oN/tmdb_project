import React,{useEffect, useState} from 'react';
import MovieList from "../../Components/MovieList/MovieList";
import {MovieService} from "../../Services";
import {GenresService} from "../../Services/GenresService";
import { useHistory } from "react-router-dom";

import styles from './Home.module.css'

export function Home() {
    let [movieList, setMovieList] = useState([]);
    let [isLoading, setIsLoading] = useState(null);
    const history = useHistory();

    const fetchMovies = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const movies = await MovieService.getMovies();
                if (movies)
                    resolve(movies);
                else throw new Error('Failed to fetch movies');
            } catch (e) {
                reject(e);
            }
        });
    }

    const fetchGenres =  () => {
        return new Promise(async (resolve, reject) => {
            try {
                const genres = await GenresService.getGenres();
                if (genres)
                    resolve(genres);
                else throw new Error('Failed to fetch genres');
            } catch (e) {
                reject(e);
            }
        });
    }

    const fetchMoviesData = async () => {
        setIsLoading(true);

        const requests = [ fetchMovies(), fetchGenres()];
        try {
            const [{results: movies}, {genres}] = await Promise.all(requests);
            movies.forEach((movie) => {
                const genresList = movie.genre_ids.map(id => genres.find(genreObj => genreObj.id === id));

                delete movie.genre_ids;
                movie.genres = genresList;
                });

            setMovieList(movies);
        }
        catch (e) {
            console.error(e);
        }
        finally {
            setIsLoading(false);
        }
    }

    const renderLoadingIndicator = () => (<div className={styles.loading}>Loading...</div>);

    const onMovieClick = (movie) => {
        history.push(`movie/${movie.id}`);
    }

    useEffect(() => {
        fetchMoviesData();
    }, []);

    return (
        <div>
        { (isLoading || isLoading === null) ? renderLoadingIndicator() : <MovieList items={movieList} onMovieClick={onMovieClick}/> }
        </div>
    );
}