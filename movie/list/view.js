const View = {
    renderMovies: function (movies) {
        const movieList = document.getElementById('movie-list');
        movieList.innerHTML = ''; // Clear any existing content

        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'bg-gray-700 shadow-md rounded cursor-pointer rounded-lg';
            movieCard.innerHTML = `
                <a href="../detail/detail.html?movieId=${movie.id}" class="transition-opacity duration-300 hover:opacity-40">
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
                </a>
            `;
            movieList.appendChild(movieCard);
        });
    }
};

// Export the View to be used by other modules
export default View;
