import React, {useEffect, useState} from 'react';
import MovieList from "../../Components/MovieList/MovieList";
import {MovieService} from "../../Services";
import {GenresService} from "../../Services/GenresService";
import {useHistory} from "react-router-dom";
import {toast} from 'react-toastify';
import {PaginatedList} from "../../Components/PaginatedList/PaginatedList";
import styles from './Home.module.css'

export function Home() {
    let [movieList, setMovieList] = useState([]);
    let [genresList, setGenresList] = useState([]);
    let [pagingData, setPagingData] = useState(null);
    let [isLoading, setIsLoading] = useState(null);
    const history = useHistory();

    const fetchMovies = async (params) => {
        try {
            const {results, page, total_pages} = await MovieService.getMovies(params);
            history.push(`${page}`);
            setPagingData({page, total_pages});
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

    const fetchMoviesData = async (params) => {
        setIsLoading(true);

        const requests = genresList.length ? [fetchMovies(params)] : [ fetchMovies(params), fetchGenres()];
        try {
            const [movies, genres = genresList] = await Promise.all(requests);
            movies.forEach((movie) => {
                const movieGenres = movie.genre_ids.map(id => genres.find(genreObj => genreObj.id === id));

                delete movie.genre_ids;
                movie.genres = movieGenres;
                });
            
            setGenresList(genres);
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

    const refreshPage = async (pageNumber) => {
        fetchMoviesData({page: pageNumber});
    }

    useEffect(() => {
        fetchMoviesData();
    }, []);

    return (
        <div>
        { (isLoading || isLoading === null) ? renderLoadingIndicator() :
        <PaginatedList currentPage={pagingData.page} totalPages={pagingData.total_pages} refreshPage={refreshPage}>
            <MovieList items={movieList} onMovieClick={onMovieClick}/>
        </PaginatedList> }
        </div>
    );
}