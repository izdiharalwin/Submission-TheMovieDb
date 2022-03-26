class KontenSearchComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="boxSearch">
                <h1>Searched Movies</h1>
            </div>
            <div class="row data-searching-movie row-cols-4 d-flex justify-content-around mt-5 overflow-hidden">
                <!-- Card Trending Movies -->
            </div>
        `;
    }
}

customElements.define('konten-search', KontenSearchComponent);