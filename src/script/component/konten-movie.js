class KontenMovieComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <h1 class="judulcategory">Trending Movies</h1>
        <div class="row data-trending-movie row-cols-4 d-flex justify-content-around mt-5">
            <!-- Card Trending Movies -->
        </div>
        <h1 class="goto" id="upcoming"></h1>
        <h1 class="judulcategory">Upcoming Movies</h1>
        <div class="row data-upcoming-movie row-cols-4 d-flex justify-content-around mt-5">
            <!-- Card Upcoming Movies -->
        </div>
        <h1 class="goto" id="popular"></h1>
        <h1 class="judulcategory">Popular Movies</h1>
        <div class="row data-popular-movie row-cols-4 d-flex justify-content-around mt-5">
            <!-- Card Popular Movies -->
        </div>
        <h1 class="goto" id="toprated"></h1>
        <h1 class="judulcategory">Top Rated Movies</h1>
        <div class="row data-toprated-movie row-cols-4 d-flex justify-content-around mt-5">
            <!-- Card Top Rated Movies -->
        </div>
        `;
    }
}

customElements.define('konten-movie', KontenMovieComponent);