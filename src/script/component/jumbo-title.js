class Jumbotitle extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="jumbotron jumbotron-fluid bg-transparent">
            <div class="jumbo-card">
                <h1>INFORMASI SEPUTAR COVID-19</h1>
                <p class="font-weight-normal">Temukan inforsmasi perkembangan terkini seputar Covid-19 di Indonesia dan seluruh dunia secara akurat dan profesional berdasarkan data.</p>
            </div>
        </div>
        `;
    }
}

customElements.define('jumbo-title', Jumbotitle);