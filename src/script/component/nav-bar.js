class NavBar extends HTMLElement{
    connectedCallback() {
        this.render();
    }

    render(){
        this.innerHTML = `
        <nav class="navbar container d-flex navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#"><i class="fa fa-virus text-danger"></i> infocovid</a>
            <div class="nav-list d-flex">
                <a class="nav-link active" href="#">Beranda</a>
                <a class="nav-link" href="#">Data</a>
                <a class="nav-link" href="#">FAQ</a>
                <a class="nav-link" href="#">Peta</a>
                <a class="nav-link" href="#">Berita</a>
            </div>

            <div class="nav-mobile">
                <div class="nav-list d-flex">
                    <a class="nav-link active" href="#"><i class="fa fa-home"></i>Beranda</a>
                    <a class="nav-link" href="#"><i class="fa fa-chart-line"></i>Data</a>
                    <a class="nav-link" href="#"><i class="fa fa-question-circle"></i>FAQ</a>
                    <a class="nav-link" href="#"><i class="fa fa-map"></i>Peta</a>
                    <a class="nav-link" href="#"><i class="fa fa-newspaper"></i>Berita</a>
                </div>
            </div>
        </nav>
        `;
    }
}

customElements.define('nav-bar', NavBar);