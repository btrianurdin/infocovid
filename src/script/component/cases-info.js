class CasesInfo extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set casesData(cases){
        this.cases = cases;
        
        this.render();
    }

    render() {
        const casesActive = (this.cases) ? this.cases.confirmed.value - this.cases.recovered.value - this.cases.deaths.value : '- - - -';

        this.innerHTML = `
        <h2 class="h2-title">Kasus Konfirmasi di Indonesia</h2>
        <div class="row">
            <div class="col-lg-3 col-md-6">
                <div class="card card-cases my-2">
                    <div class="card-body">
                        <p class="font-weight-light my-0 text-uppercase">Terkonfirmasi</p>
                        <h1 class="text-warning my-0 text-center text-cases">
                            ${this.cases ? this.cases.confirmed.value : '- - - -'}
                        </h1>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="card card-cases my-2">
                    <div class="card-body">
                        <p class="font-weight-light my-0 text-uppercase">positif aktif</p>
                        <h1 style="color:#e67e22" class="my-0 text-center text-cases">
                            ${casesActive}
                        </h1>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="card card-cases my-2">
                    <div class="card-body">
                        <p class="font-weight-light my-0 text-uppercase">sembuh</p>
                        <h1 class="text-success my-0 text-center text-cases">
                            ${this.cases ? this.cases.recovered.value : '- - - -'}
                        </h1>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="card card-cases my-2">
                    <div class="card-body">
                        <p class="font-weight-light my-0 text-uppercase">meninggal</p>
                        <h1 class="text-danger my-0 text-center text-cases">
                            ${this.cases ? this.cases.deaths.value : '- - - -'}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        <p class="text-muted font-weight-light">Terakhir Diperbarui : ${this.cases ? this.cases.lastUpdate : '-'}</p>
        `;
    }
}

customElements.define('cases-info', CasesInfo);