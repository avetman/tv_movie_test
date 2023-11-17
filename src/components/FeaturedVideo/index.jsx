import { useState, useEffect } from "react";
import styles from './featuredVideo.module.css';
import { formatDuration } from "../../helpers/index.js";
import VideoPlayer from "../VideoPlayer/index.jsx";

const FeaturedVideo = ({ featuredVideo, setFeaturedVideo }) => {
    const [showImage, setShowImage] = useState(true);
    const formatedDuration = formatDuration(featuredVideo?.Duration);

    useEffect(() => {
        // Show the featured image initially
        setShowImage(true);

        if (featuredVideo) {
            const timer = setTimeout(() => {
                setShowImage(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [featuredVideo]);

    return (
        <div className={styles.featuredVideo}>
            {/* Video Cover Image */}
            <div className="videoCover">
                {showImage && (
                    <img
                        className={styles.videoCover}
                        src={`${import.meta.env.BASE_URL}src/assets/${featuredVideo?.CoverImage}`}
                        alt={featuredVideo?.Title}
                    />
                )}
                {!showImage && <VideoPlayer url={featuredVideo.VideoUrl} onVideoEnd={() => console.log('Video ended')} />}
            </div>

            {/* Video Info */}
            <div className={styles.videoInfo}>
                <span className={styles.category}>{featuredVideo?.Category}</span>
                <img className={styles.titleImage} src={`${import.meta.env.BASE_URL}src/assets/${featuredVideo?.TitleImage}`} alt={featuredVideo?.Title} />

                <div className={styles.movieSpecs}>
                    <span >{featuredVideo?.ReleaseYear}</span>
                    <span >{featuredVideo?.MpaRating}</span>
                    <span>{formatedDuration}</span>
                </div>

                <p className={styles.description}>{featuredVideo?.Description}</p>

                {/* Buttons */}
                <div className={styles.actionButtons}>
                    <button className={styles.playButton}>
                        <svg width="16px" height="16px" viewBox="-3 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                                <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-419.000000, -571.000000)" fill="#000000">
                                    <path d="M440.415,583.554 L421.418,571.311 C420.291,570.704 419,570.767 419,572.946 L419,597.054 C419,599.046 420.385,599.36 421.418,598.689 L440.415,586.446 C441.197,585.647 441.197,584.353 440.415,583.554" id="play" sketch:type="MSShapeGroup">
                                    </path>
                                </g>
                            </g>
                        </svg>
                        Play
                    </button>
                    <button className={styles.moreInfo}>More Info</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedVideo;
