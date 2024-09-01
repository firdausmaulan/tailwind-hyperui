// js/controller.js

import Model from './model.js';
import View from './view.js';

const Controller = {
    init: async function () {
        const users = await Model.fetchUsers();
        View.renderUsers(users);
    }
};

// Initialize the Controller
Controller.init();
