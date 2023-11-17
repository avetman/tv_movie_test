import {useState, useEffect} from 'react';

const useVideoData = () => {
    const [featuredVideo, setFeaturedVideo] = useState(null);
    const [trendingVideos, setTrendingVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.BASE_URL}src/assets/data.json`);
                const data = await response.json();

                setFeaturedVideo(data.Featured);
                setTrendingVideos(data.TrendingNow);
            } catch (error) {
                console.error('Error fetching video data:', error);
            }
        };

        fetchData();
    }, []);
    return { featuredVideo, trendingVideos, setFeaturedVideo };
}

export default useVideoData;
