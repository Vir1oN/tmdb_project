import React from 'react';
import styles from './MovieItem.module.css';

const buildPosterUrl = (imgPath, width = 200) => `https://image.tmdb.org/t/p/w${width}/${imgPath}`

export default function MovieItem(props) {
    const {original_title, overview, release_date, vote_average, vote_count, poster_path, genres} = props;
    return (
        <div className={styles.itemWrapper}>
            <div className={styles.imageWrapper} style={{backgroundImage: `url(${buildPosterUrl(poster_path)})`}}/>
            <div className={styles.itemContent}>
                <h2>{original_title}</h2>
                <span>Rating: {vote_average}</span>
                <h3>{genres.map(genreObj => <span key={genreObj.id}>{genreObj.name + ' '}</span>)}</h3>
                <span>Release date: {release_date}</span>
            </div>
        </div>
    );
}