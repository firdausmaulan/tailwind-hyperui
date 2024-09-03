// detail-main.js
import '../core/api.js'; // Load API utilities from core directory
import DetailController from './controller.js'; // Import detail controller

// Function to get movie ID from URL parameters
function getMovieIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('movieId');
}

// Initialize the detail view with the movie ID from the URL
const movieId = getMovieIdFromUrl();
if (movieId) {
    DetailController.init(movieId);
} else {
    console.error("Movie ID not found in URL.");
}
