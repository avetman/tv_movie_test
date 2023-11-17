export const iconData = [
    { id: 1, name: 'Search', url: `${import.meta.env.BASE_URL}src/assets/icons/ICON-Search.png` },
    { id: 2, name: 'Home', url: `${import.meta.env.BASE_URL}src/assets/icons/home.png` },
    { id: 3, name: 'TV Shows', url: `${import.meta.env.BASE_URL}src/assets/icons/Group-56.png` },
    { id: 4, name: 'Movies', url: `${import.meta.env.BASE_URL}src/assets/icons/Group-54.png` },
    { id: 5, name: 'Genres', url: `${import.meta.env.BASE_URL}src/assets/icons/Group-53.png` },
    { id: 6, name: 'Watch Later', url: `${import.meta.env.BASE_URL}src/assets/icons/Group-47.png` },
];

export const  formatDuration = (durationInSeconds) => {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const remainingSeconds = durationInSeconds % 60;

    let formattedDuration = '';

    if (hours > 0) {
        formattedDuration += `${hours}h `;
    }

    if (minutes > 0 || hours > 0) {
        formattedDuration += `${minutes}m`;
    } else {
        formattedDuration += `${remainingSeconds}s`;
    }

    return formattedDuration;
}

export const sortByLastClicked = (lastClickedMovieId, videos) => {
    return videos.slice().sort((a, b) => {
        if (a.Id === lastClickedMovieId) return -1;
        if (b.Id === lastClickedMovieId) return 1;
        return 0;
    });
};
