// detail/model.js

import { httpGet } from '../core/api.js'; // Importing from core directory

const Model = {
    fetchMovieDetail: async function (movieId) {
        try {
            const movieDetail = await httpGet(`/movie/${movieId}`);
            return movieDetail;
        } catch (error) {
            console.error("Error in Model fetching movie detail:", error);
            throw error; // rethrow to handle further up the chain
        }
    }
};

// Export the Model to be used by other modules
export default Model;
