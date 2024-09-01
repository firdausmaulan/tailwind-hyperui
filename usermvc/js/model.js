// js/model.js

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

// Export the Model to be used by other modules
export default Model;
