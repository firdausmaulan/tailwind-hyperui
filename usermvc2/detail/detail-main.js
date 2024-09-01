// detail-main.js
import '../core/api.js'; // Load API utilities from core directory
import DetailController from './controller.js'; // Import detail controller

// Function to get user ID from URL parameters
function getUserIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('userId');
}

// Initialize the detail view with the user ID from the URL
const userId = getUserIdFromUrl();
if (userId) {
    DetailController.init(userId);
} else {
    console.error("User ID not found in URL.");
}
