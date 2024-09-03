// detail/view.js

const View = {
  renderMovieDetail: function (movie) {
    const movieDetail = document.getElementById("movie-detail");
    movieDetail.innerHTML = ""; // Clear any existing content

    const movieContainer = document.createElement("div");
    movieContainer.className = "grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2";
    movieContainer.innerHTML = `
            <div class="img">
                <div class="img-box h-full md:max-h-screen">
                    <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" 
                        alt=""
                        class="max-lg:mx-auto lg:ml-auto h-full">
                    </img>
                </div>
            </div>
            <div
                class="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
                <div class="data w-full max-w-xl">
                    <h2 class="font-manrope font-bold text-3xl leading-10 text-white mb-3 capitalize">
                        ${movie.title}
                    </h2>
                    <p class="text-gray-400 text-base font-normal mb-3"><strong>Rating :</strong> ${movie.vote_average.toFixed(2)} / 10</p>
                    <p class="text-gray-400 text-base font-normal mb-3"><strong>Release Date :</strong> ${movie.release_date}</p>
                    <p class="text-gray-400 text-base font-normal mb-3">
                        ${movie.overview}
                    </p>
                    <a href="../list/list.html" id="prev-button"
                        class="inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18">
                            </path>
                        </svg>
                        <span class="ml-1 font-bold text-lg">Prev</span>
                    </a>
                </div>
            </div>
        `;
    movieDetail.appendChild(movieContainer);
  },
};

// Export the View to be used by other modules
export default View;
