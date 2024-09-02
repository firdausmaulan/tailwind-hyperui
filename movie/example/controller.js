import Model from './model.js';
import View from './view.js';

const ListController = {
    currentQuery : "Doraemon",
    currentPage: 1,  // Track the current page number
    itemsPerPage: 20, // Define how many items to show per page (adjust as needed)

    init: function () {
        // Initial data fetch
        this.loadMovies();

        // Attach search event listener
        const searchButton = document.getElementById('search-button');
        const searchInput = document.getElementById('search-input');

        searchButton.addEventListener('click', () => {
            const query = searchInput.value.trim();
            this.currentQuery = query;
            this.currentPage = 1; // Reset to first page on new search
            this.loadMovies();
        });

        searchInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                const query = searchInput.value.trim();
                this.currentPage = 1; // Reset to first page on new search
                this.loadMovies(query);
            }
        });

        // Attach pagination event listeners
        const prevButton = document.getElementById('prev-button');
        const nextButton = document.getElementById('next-button');

        prevButton.addEventListener('click', () => {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.loadMovies();
            }
        });

        nextButton.addEventListener('click', () => {
            this.currentPage++;
            this.loadMovies();
        });
    },

    loadMovies: async function () {
        try {
            const response = await Model.fetchMovies(this.currentQuery, this.currentPage);
            const movies = response.results;
            View.renderMovies(movies);
            // No need to slice data, handled by server-side pagination
            this.updatePaginationButtons(movies.length);
        } catch (error) {
            console.error("Error loading movies:", error);
        }
    },

    // Update the state of the pagination buttons
    updatePaginationButtons: function (currentItemsCount) {
        const prevButton = document.getElementById('prev-button');
        const nextButton = document.getElementById('next-button');

        prevButton.disabled = this.currentPage === 1;
        nextButton.disabled = currentItemsCount < this.itemsPerPage; // Disable next if fewer items than limit
    }
};

export default ListController;
