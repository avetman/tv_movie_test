import { useState } from 'react';
import styles from './carousel.module.css';

const MovieCarousel = ({ movies, handleMovieClick }) => {
    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        setStartIndex((prevIndex) => prevIndex + 1);
    };

    const handlePrev = () => {
        setStartIndex((prevIndex) => Math.max(0, prevIndex - 1));
    };
    const handleClick = (movie) => {
        handleMovieClick(movie);
    };
    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carousel}>
                {movies.slice(startIndex, startIndex + 8).map((movie) => (
                    <div className={styles.movieItem} key={movie.Id} onClick={() => handleClick(movie)}>
                        <img src={`${import.meta.env.BASE_URL}src/assets/${movie.CoverImage}`} alt={movie.Title} />
                    </div>
                ))}
            </div>
            <button className={styles.prev} onClick={handlePrev} disabled={startIndex === 0}>
                <img src={`${import.meta.env.BASE_URL}src/assets/icons/Arrow.svg`} alt="Previous" />
            </button>
            <button className={styles.next} onClick={handleNext} disabled={startIndex + 8 >= movies.length}>
                <img src={`${import.meta.env.BASE_URL}src/assets/icons/Arrow.svg`} alt="Next" />
            </button>
        </div>
    );
};

export default MovieCarousel;
