// detail/view.js

const View = {
    renderUserDetail: function (user) {
        const userDetail = document.getElementById('user-detail');
        userDetail.innerHTML = ''; // Clear any existing content

        const userCard = document.createElement('div');
        userCard.className = 'bg-white shadow-md rounded p-4';
        userCard.innerHTML = `
            <h2 class="text-2xl font-bold">${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> ${user.website}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
            <p><strong>Company:</strong> ${user.company.name}</p>
        `;
        userDetail.appendChild(userCard);
    }
};

// Export the View to be used by other modules
export default View;
