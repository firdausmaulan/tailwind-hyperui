// detail/model.js

import { httpGet } from '../core/api.js'; // Importing from core directory

const Model = {
    fetchUserDetail: async function (userId) {
        try {
            const userDetail = await httpGet(`/users/${userId}`);
            return userDetail;
        } catch (error) {
            console.error("Error in Model fetching user detail:", error);
            throw error; // rethrow to handle further up the chain
        }
    }
};

// Export the Model to be used by other modules
export default Model;
