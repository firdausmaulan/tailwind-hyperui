// list/model.js

import { httpGet } from '../core/api.js'; // Importing from core directory

const Model = {
    fetchMovies: async function (query, page) {
        try {
            const response = await httpGet('/search/movie', {'query': query, 'page': page});
            return response;
        } catch (error) {
            console.error("Error in Model fetching moviesResponse:", error);
            throw error; // rethrow to handle further up the chain
        }
    }
};

// Export the Model to be used by other modules
export default Model;
