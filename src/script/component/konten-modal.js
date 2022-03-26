class KontenModalComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <!-- Modal -->
            <div class="modal fade" id="modalDetail" tabindex="-1" aria-labelledby="modalDetailLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header text-center">
                            <h5 class="modal-title" id="modalDetailLabel">Detail Movie</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('konten-modal', KontenModalComponent);