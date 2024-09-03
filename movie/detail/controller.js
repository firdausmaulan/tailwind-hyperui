// detail/controller.js

import Model from './model.js';
import View from './view.js';

const DetailController = {
    init: async function (movieId) {
        try {
            const movieDetail = await Model.fetchMovieDetail(movieId);
            View.renderMovieDetail(movieDetail);
        } catch (error) {
            console.error("Error initializing Detail Controller:", error);
        }
    }
};

// Export the DetailController for use in other modules
export default DetailController;
