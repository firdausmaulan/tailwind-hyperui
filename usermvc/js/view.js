// js/view.js

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

// Export the View to be used by other modules
export default View;
