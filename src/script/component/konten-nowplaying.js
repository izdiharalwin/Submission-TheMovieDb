class NowPlayingComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="boxTitle">
                <h1>Now Playing</h1>
            </div>
            <div class="row data-nowplaying-movie row-cols-4 d-flex justify-content-around mt-5">
                <!-- Card Now Playing Movies -->
            </div>
        `;
    }
}

customElements.define('konten-nowplaying', NowPlayingComponent);