const View = {
    renderMovies: function (movies) {
        const movieList = document.getElementById('movie-list');
        movieList.innerHTML = ''; // Clear any existing content

        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'bg-gray-700 shadow-md rounded cursor-pointer rounded-lg';
            movieCard.innerHTML = `
                <div class="transition-opacity duration-300 hover:opacity-40">
                    <div>
                        <img
                            src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                            alt=""
                            class="w-full h-128 object-cover rounded-lg"
                        />
                        <div class="p-2">
                            <h3 class="text-lg/tight font-medium text-white text-center">${movie.title}</h3>
                        </div>
                    </div>
                </div>
            `;
            
            // Add event listener to open modal with movie details
            movieCard.addEventListener('click', () => {
                View.showMovieInModal(movie);
            });

            movieList.appendChild(movieCard);
        });
    },

    showMovieInModal: function (movie) {
        const modal = document.getElementById('myModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalImage = document.getElementById('modalImage');
        const modalOverview = document.getElementById('modalOverview');
        const modalRating = document.getElementById('modalRating');
        const modalReleaseDate = document.getElementById('modalReleaseDate');

        modalTitle.textContent = movie.title;
        modalImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        modalOverview.textContent = movie.overview;
        modalRating.textContent = `${movie.vote_average.toFixed(2)} / 10`;
        modalReleaseDate.textContent = movie.release_date;

        modal.classList.remove('hidden');
    }
};

// JavaScript to handle closing the modal
document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('myModal').classList.add('hidden');
});

// Export the View to be used by other modules
export default View;