// detail/controller.js

import Model from './model.js';
import View from './view.js';

const DetailController = {
    init: async function (userId) {
        try {
            const userDetail = await Model.fetchUserDetail(userId);
            View.renderUserDetail(userDetail);
        } catch (error) {
            console.error("Error initializing Detail Controller:", error);
        }
    }
};

// Export the DetailController for use in other modules
export default DetailController;
