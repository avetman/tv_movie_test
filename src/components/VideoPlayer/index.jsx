import {useEffect, useRef, useState} from 'react';
import styles from './videoPlayer.module.css'
const VideoPlayer = ({url,onVideoEnd}) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        videoElement.src = url;

        return () => {
            videoElement.removeEventListener('ended', onVideoEnd);
        };
    }, [url, onVideoEnd]);

    return (
        <div className={styles.videoPlayer}>
            <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                loop
                controls={false}
                controlsList="nodownload"
            />
        </div>
    )
}

export default VideoPlayer
