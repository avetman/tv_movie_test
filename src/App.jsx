import {useState} from 'react';
import './App.css'
import MainMenu from "./components/MainMenu/index.jsx";
import FeaturedVideo from "./components/FeaturedVideo/index.jsx";
import TrendingVideos from "./components/Trending/index.jsx";
import useVideoData from "./hooks/useVideoData.js";



function App() {

    const { featuredVideo, trendingVideos, setFeaturedVideo } = useVideoData();
  return (
    <div className='App'>
        <MainMenu/>
        <div className="container">
            <FeaturedVideo featuredVideo={featuredVideo} setFeaturedVideo={setFeaturedVideo} />
            <TrendingVideos trendingVideos={trendingVideos} setFeaturedVideo={setFeaturedVideo} />
        </div>

    </div>
  )
}

export default App
