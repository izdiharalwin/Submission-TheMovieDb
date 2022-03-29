const main = () => {
    const imgMovies = 'https://image.tmdb.org/t/p/w500';
    const trendingMovies = 'https://api.themoviedb.org/3/trending/all/day?api_key=dd86bc7def42d90685c99a83ba663864';
    const upcomingMovies = 'https://api.themoviedb.org/3/movie/upcoming?api_key=dd86bc7def42d90685c99a83ba663864';
    const popularMovies = 'https://api.themoviedb.org/3/movie/popular?api_key=dd86bc7def42d90685c99a83ba663864';
    const topratedMovies = 'https://api.themoviedb.org/3/movie/top_rated?api_key=dd86bc7def42d90685c99a83ba663864';
    const nowplayingMovies = 'https://api.themoviedb.org/3/movie/now_playing?api_key=dd86bc7def42d90685c99a83ba663864';

    document.getElementById("kontenSearch").style.display = "none";
    document.getElementById("kontenNowplaying").style.display = "none";
    // Function untuk Tampilan Card Movie //
    const showCard = _movie => {
        return `
        <div class="card my-3" style="width: 15rem">
        <img src="${imgMovies + _movie.poster_path}" class="card-img-top mt-2" alt="${_movie.title}" />
        <div class="card-body">
            <h6 class="card-title fw-bold">${_movie.title}</h6>
            <p class="card-text fs-6">${_movie.release_date}</p>
            <a href="#" class="btn btn-success btn-sm modal-detail-button" data-bs-toggle="modal" data-bs-target="#modalDetail" data-movieId="${_movie.id}">Show Detail</a>
        </div>
    </div>`;
    };

    // Menampilkan Trending Movies //
    fetch(trendingMovies)
        .then(response => response.json())
        .then(responseJson => {
            const movies = responseJson.results;
            let cards = '';

            movies.forEach(movie => {
                cards += showCard(movie);
            });

            const trendingMoviesContainer = document.querySelector('.data-trending-movie');
            trendingMoviesContainer.innerHTML = cards;

            // Menampilkan Detail Movie //
            const modalDetailBtn = document.querySelectorAll('.modal-detail-button');

            modalDetailBtn.forEach(button => {
                button.addEventListener('click', () => {
                    getDetail(button.dataset.movieid)
                });
            })
        })

    // Menampilkan Upcoming Movies //
    fetch(upcomingMovies)
        .then(response => response.json())
        .then(responseJson => {
            const movies = responseJson.results;
            let cards = '';

            movies.forEach(movie => {
                cards += showCard(movie);
            });

            const upcomingMoviesContainer = document.querySelector('.data-upcoming-movie');
            upcomingMoviesContainer.innerHTML = cards;


            // Menampilkan Detail Movie //
            const modalDetailBtn = document.querySelectorAll('.modal-detail-button');

            modalDetailBtn.forEach(button => {
                button.addEventListener('click', () => {
                    getDetail(button.dataset.movieid)
                });
            })

        })

    // Menampilkan Popular Movies //
    fetch(popularMovies)
        .then(response => response.json())
        .then(responseJson => {
            const movies = responseJson.results;
            let cards = '';

            movies.forEach(movie => {
                cards += showCard(movie);
            });

            const popularMoviesContainer = document.querySelector('.data-popular-movie');
            popularMoviesContainer.innerHTML = cards;

            const modalDetailBtn = document.querySelectorAll('.modal-detail-button');
            modalDetailBtn.forEach(button => {
                button.addEventListener('click', () => {
                    getDetail(button.dataset.movieid)
                });
            })

        })

    // Menampilkan Top Rated Movies //
    fetch(topratedMovies)
        .then(response => response.json())
        .then(responseJson => {
            const movies = responseJson.results;
            let cards = '';

            movies.forEach(movie => {
                cards += showCard(movie);
            });

            const topratedMoviesContainer = document.querySelector('.data-toprated-movie');
            topratedMoviesContainer.innerHTML = cards;

            const modalDetailBtn = document.querySelectorAll('.modal-detail-button');
            modalDetailBtn.forEach(button => {
                button.addEventListener('click', () => {
                    getDetail(button.dataset.movieid)
                });
            })
        })
        .catch(error => {
            showResponseError(error)
        })

    // Search Movie //
    const searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', () => {
        const searchForm = document.querySelector('.search-form');
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=dd86bc7def42d90685c99a83ba663864&language=en-US&query=${searchForm.value}&include_adult=false`)
            .then(response => response.json())
            .then(responseJson => {
                if (searchForm.value === '') {
                    return Swal.fire({
                        icon: 'error',
                        title: 'Masukkan Judul Movie',
                        showConfirmButton: true,
                        timer: 5000
                    })
                } else {
                    document.getElementById("home").style.display = "none";
                    document.getElementById("kontenNowplaying").style.display = "none";
                    document.getElementById("kontenSearch").style.display = "block";
                    const movies = responseJson.results;
                    let cards = '';

                    movies.forEach(movie => {
                        cards += showCard(movie);
                    });

                    const searchingMovieContainer = document.querySelector('.data-searching-movie');
                    searchingMovieContainer.innerHTML = cards;

                    const modalDetailBtn = document.querySelectorAll('.modal-detail-button');
                    modalDetailBtn.forEach(button => {
                        button.addEventListener('click', () => {
                            getDetail(button.dataset.movieid)
                        });
                    })
                }
                // Agar scroll tetap diatas //
                window.scrollTo({ top: 0, behavior: 'smooth' });

            });
    });

    // Now Playing Movie //
    const nowplayingButton = document.getElementById("nowplaying")
    nowplayingButton.addEventListener('click', () => {
        fetch(nowplayingMovies)
            .then(response => response.json())
            .then(responseJson => {
                document.getElementById("home").style.display = "none";
                document.getElementById("kontenSearch").style.display = "none";
                document.getElementById("kontenNowplaying").style.display = "block";
                const movies = responseJson.results;
                let cards = '';

                movies.forEach(movie => {
                    cards += showCard(movie);
                });

                const nowplayingMovieContainer = document.querySelector('.data-nowplaying-movie');
                nowplayingMovieContainer.innerHTML = cards;

                const modalDetailBtn = document.querySelectorAll('.modal-detail-button');
                modalDetailBtn.forEach(button => {
                    button.addEventListener('click', () => {
                        getDetail(button.dataset.movieid)
                    });
                })
                // Agar scroll tetap diatas //
                window.scrollTo({ top: 0, behavior: 'smooth' });

            });
    });

    // Function untuk kembali ke Home //
    const backHome = document.querySelector('#backHome')
    backHome.addEventListener('click', () => {
        document.getElementById("home").style.display = "block";
        document.getElementById("kontenSearch").style.display = "none";
        document.getElementById("kontenNowplaying").style.display = "none";
    })

    const showResponseError = (message = 'Error!') => {
        alert(message);
    };

    // Function agar web tidak reload //
    document.getElementById("search-button").addEventListener("click", (event) => {
        event.preventDefault()
    });
};

// Function Untuk Show Detail Movie //
function getDetail(movieId) {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=dd86bc7def42d90685c99a83ba663864`)
        .then(response => response.json())
        .then(_movie => {
            const imgMovies = 'https://image.tmdb.org/t/p/w500'
            // let gambar = imgMovies + _movie.poster_path
            // console.log(gambar)
            const modalBody = document.querySelector('.modal-body');
            modalBody.innerHTML =
                `
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="${imgMovies + _movie.poster_path}" class="img-fluid" alt="${_movie.title}" />
                            </div>
                            <div class="col-md">
                                <ul class="list-group">
                                    <li class="list-group-item list-group-item-dark">
                                        <h3><strong>${_movie.title}</strong></h3>
                                    </li>
                                    <li class="list-group-item list-group-item-danger d-flex justify-content-between align-items-center">
                                        <strong>Rating : </strong>${_movie.vote_average}
                                    </li>
                                    <li class="list-group-item list-group-item-success d-flex justify-content-between align-items-center">
                                        <strong>Release Date : </strong>${_movie.release_date}
                                    </li>
                                    <li class="list-group-item list-group-item-primary d-flex justify-content-between align-items-center">
                                        <strong>Popularity : </strong>${_movie.popularity} K
                                    </li>
                                    <li class="list-group-item list-group-item-warning d-flex justify-content-between align-items-center">
                                        <strong>Vote Count : </strong>${_movie.vote_count}
                                    </li>
                                    <li class="list-group-item list-group-item-secondary"><strong>Overview : </strong>${_movie.overview}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    `;


        })
}

export default main;

