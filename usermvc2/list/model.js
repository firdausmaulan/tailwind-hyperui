// list/model.js

import { httpGet } from '../core/api.js'; // Importing from core directory

const Model = {
    fetchUsers: async function () {
        try {
            const users = await httpGet('/users');
            return users;
        } catch (error) {
            console.error("Error in Model fetching users:", error);
            throw error; // rethrow to handle further up the chain
        }
    }
};

// Export the Model to be used by other modules
export default Model;
