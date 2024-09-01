// list/controller.js

import Model from './model.js';
import View from './view.js';

const Controller = {
    init: async function () {
        try {
            const users = await Model.fetchUsers();
            View.renderUsers(users);
        } catch (error) {
            console.error("Error initializing Controller:", error);
        }
    }
};

// Export the Controller's init method for manual initialization
export default Controller;