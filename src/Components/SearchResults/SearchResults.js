import React, {useEffect, useState} from "react";
import {useHistory, useRouteMatch} from "react-router-dom";
import {MovieService} from "../../Services";
import {GenresService} from "../../Services/GenresService";
import {toast} from "react-toastify";
import styles from "../../Pages/Home/Home.module.css";
import MovieList from "../MovieList/MovieList";

export default function SearchResults () {
    let [movieList, setMovieList] = useState([]);
    let [isLoading, setIsLoading] = useState(null);
    const history = useHistory();
    const {params} = useRouteMatch();

    const fetchMovies = async (searchStr) => {
        try {
            const {results} = await MovieService.searchMoviesByName(searchStr);
            return results;
        } catch (e) {
            console.error(e);
        }
    };
    const fetchGenres = async () => {
        try {
            const {genres} = await GenresService.getGenres();
            return genres;
        } catch (e) {
            console.error(e);
        }
    };

    const fetchMoviesData = async (searchStr) => {
        setIsLoading(true);

        const requests = [fetchMovies(searchStr), fetchGenres()];
        try {
            const [movies, genres] = await Promise.all(requests);
            movies.forEach((movie) => {
                const movieGenres = movie.genre_ids.map(id => genres.find(genreObj => genreObj.id === id));

                delete movie.genre_ids;
                movie.genres = movieGenres;
            });

            setMovieList(movies);
        }
        catch (e) {
            toast.error('Sorry, the movie list could not be loaded');
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
        fetchMoviesData(params.str);
    }, []);

    return (
        <div>
            { (isLoading || isLoading === null) ? renderLoadingIndicator() :
                    <MovieList items={movieList} onMovieClick={onMovieClick}/>
            }
        </div>
    );
}