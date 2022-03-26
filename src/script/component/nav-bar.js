class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#home">Catalog Movies</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" id="backHome" aria-current="page" href="#home">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Categories
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#home">Trending</a></li>
                            <li><a class="dropdown-item" href="#upcoming">Upcoming</a></li>
                            <li><a class="dropdown-item" href="#popular">Popular</a></li>
                            <li><a class="dropdown-item" href="#toprated">Top Rated</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2 search-form" type="search" placeholder="Masukkan Judul Movie"
                        aria-label="Search">
                    <button class="btn btn-outline-success search-button" id="search-button" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>`;
    }
}

customElements.define('nav-bar', NavBar);