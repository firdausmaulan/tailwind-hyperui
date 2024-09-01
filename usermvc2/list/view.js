const View = {
    renderUsers: function (users) {
        const userList = document.getElementById('user-list');
        userList.innerHTML = ''; // Clear any existing content

        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.className = 'bg-white shadow-md rounded p-4 cursor-pointer';
            // Note open new page with a href
            userCard.innerHTML = `
                <a href="../detail/detail.html?userId=${user.id}">
                    <h2 class="text-xl font-bold">${user.name}</h2>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Website:</strong> ${user.website}</p>
                </a>
            `;
            userList.appendChild(userCard);
        });
    }
};

// Export the View to be used by other modules
export default View;
