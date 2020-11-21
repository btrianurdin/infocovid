import { Chart } from "chart.js";

class GrafikData extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    monthString(month){
        const monthStr = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'];

        return monthStr[month];
    }

    set casesData(cases){
        this.data = [];
        this.dataTemp = 0;
        this.date = [];

        for (const value of cases) {
            // Push ke array data
            this.data.push(parseInt(value.Cases) - parseInt(this.dataTemp));
            this.dataTemp = parseInt(value.Cases);

            // push ke array date
            const setDate = new Date(value.Date);
            const bulan = this.monthString(setDate.getMonth());
            this.date.push(`${setDate.getDate()}, ${bulan}`);
        }        

        if (this.data.length != 0 && this.date.length != 0) {
            this.render();
            this.chartConfig();
            
            // Jika cases dari API sudah terload (sukses di dapat), loading akan hilang
            const spinner = document.querySelector('#grafikLoading');
            spinner.classList.remove("d-flex");
        }
    }

    render(){
        this.innerHTML = `
        <h2 class="h2-title">Grafik Konfirmasi Harian di Indonesia</h2>
        <div class="card card-cases my-3">
            <div class="card-body card-cases">

                <div style="height:300px" id="grafikLoading" class="d-flex justify-content-center align-items-center">
                    <div class="spinner-border text-danger" style="width:60px;height:60px" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>

                <canvas id="grafikData" width="400" height="150">Your browser does not support the canvas element.</canvas>
            </div>
        </div>
        `;
    }

    chartConfig(){
        const ctx = document.querySelector('#grafikData');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.date,
                datasets: [{
                    label: 'Terkonfirmasi',
                    data: this.data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
}

customElements.define('grafik-data', GrafikData);