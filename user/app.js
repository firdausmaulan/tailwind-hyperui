// app.js

// Model: Fetching data from the API
const Model = {
    fetchUsers: async function () {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await response.json();
            return users;
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }
};

// View: Rendering data to the UI
const View = {
    renderUsers: function (users) {
        const userList = document.getElementById('user-list');
        userList.innerHTML = ''; // Clear any existing content

        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.className = 'bg-white shadow-md rounded p-4';
            userCard.innerHTML = `
                <h2 class="text-xl font-bold">${user.name}</h2>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Website:</strong> ${user.website}</p>
            `;
            userList.appendChild(userCard);
        });
    }
};

// Controller: Connecting Model and View
const Controller = {
    init: async function () {
        const users = await Model.fetchUsers();
        View.renderUsers(users);
    }
};

// Initialize the Controller
Controller.init();
