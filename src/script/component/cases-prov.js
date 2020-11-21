class CasesProv extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set casesData(cases) {
        this.cases = cases;
        
        if (this.cases != undefined) {
            this.render();

            // Jika cases dari API sudah terload (sukses di dapat), loading akan hilang
            const elTableProv = document.querySelector('#tableProv');
            const elTableLoading = document.querySelector('#tableLoading');
            elTableProv.classList.remove('table-prov');
            elTableLoading.classList.remove('d-flex');
        }
    }

    render() {
        this.innerHTML = `
        <h2 class="h2-title">Tabel Kasus Per Provisi di Indonesia</h2>
        <div class="card card-cases my-3">
            <div class="card-body card-cases">
                <div style="height:300px" id="tableLoading" class="d-flex justify-content-center align-items-center">
                    <div class="spinner-border text-danger" style="width:60px;height:60px" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <div id="tableProv" class="table-responsive table-prov" style="height:450px;overflow:auto">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Provinsi</th>
                                <th scope="col">Konfirmasi</th>
                                <th scope="col">Sembuh</th>
                                <th scope="col">Meninggal</th>
                            </tr>
                        </thead>
                        <tbody id="tableBody"></tbody>
                    </table>
                </div>
            </div>
        </div>`;

        const tableBody = document.getElementById('tableBody');

        for (const key in this.cases) {
            const el = document.createElement('tr');
            el.innerHTML = `<tr>
                <th scope="row">${parseInt(key)+1}</th>
                <td>${this.cases[key].attributes.Provinsi}</td>
                <td class="text-warning">${this.cases[key].attributes.Kasus_Posi}</td>
                <td class="text-success">${this.cases[key].attributes.Kasus_Semb}</td>
                <td class="text-danger">${this.cases[key].attributes.Kasus_Meni}</td>
            </tr>`;

            tableBody.appendChild(el);
        }
    }
}

customElements.define('cases-prov', CasesProv);