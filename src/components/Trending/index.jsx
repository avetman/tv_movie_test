import MovieCarousel from "../MovieCarousel/index.jsx";
import { useState, useEffect} from "react";
import {sortByLastClicked} from "../../helpers/index.js";
import styles from './trendingSection.module.css'
const TrendingVideos = ({ trendingVideos, setFeaturedVideo }) => {
    const lastClickedMovieId = sessionStorage.getItem('lastClickedMovieId');
    const [filteredTrendingVideos, setFilteredTrendingVideos] = useState([]);


    useEffect(() => {
        const sortedVideos = sortByLastClicked(lastClickedMovieId, trendingVideos);
        setFilteredTrendingVideos(sortedVideos);
        setFeaturedVideo(sortedVideos[0]);
    }, [trendingVideos, lastClickedMovieId, setFeaturedVideo]);

    const handleMovieClick = (movie) => {
        setFeaturedVideo({
            Id: movie.Id,
            Title: movie.Title,
            CoverImage: movie.FeaturedCover,
            TitleImage: movie.TitleImage,
            ReleaseYear: movie.ReleaseYear,
            MpaRating: movie.MpaRating,
            Category: movie.Category,
            Duration: movie.Duration,
            Description: movie.Description,
            VideoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        });

        // Save the movie ID in session storage
        sessionStorage.setItem('lastClickedMovieId', movie.Id);
    };

    return (
        <div className={styles.trendingNowSection}>
            <h3 className={styles.title}>Trending now</h3>
            <MovieCarousel handleMovieClick={handleMovieClick} movies={filteredTrendingVideos} />
        </div>
    );
};

export default TrendingVideos;
