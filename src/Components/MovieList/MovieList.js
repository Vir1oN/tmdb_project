import React from 'react';
import MovieItem from "../MovieItem/MovieItem";
import styles from './MovieList.module.css';

export default function MovieList ({items, onMovieClick}) {
    return (
        <div className={styles.listWrapper}>
            {items.map(movie=>
                <div className={styles.movieItemWrapper} key={movie.id} onClick={() => onMovieClick(movie)}>
                    <MovieItem {...movie} key={movie.id}/>
                </div>)
            }
        </div>
    );
}