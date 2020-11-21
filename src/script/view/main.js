import '../component/cases-info.js';
import '../component/word-cases.js';
import '../component/grafik-data.js';
import '../component/cases-prov.js';
import DataAPI from '../data/data-source.js';

const main = () => {

    const casesInfo = document.querySelector('cases-info');
    const worldCases = document.querySelector('world-cases');
    const grafikData = document.querySelector('grafik-data');
    const casesProv = document.querySelector('cases-prov');

    // Ambil data kasus Indonesia
    DataAPI.covidData('indonesia')
            .then(result => casesInfo.casesData = result)
            .catch(err => console.log(err));

    // Ambil data kasus seluruh Dunia
    DataAPI.covidData()
            .then(result => worldCases.casesData = result)
            .catch(err => console.log(err));

    // Ambil data kasus semua provinsi indonesia
    DataAPI.dataCasesProvince()
            .then(result => casesProv.casesData = result)
            .catch(err => console.log(err));

    // Ambil data kasus dari hari pertama
    DataAPI.getCasesFromDayOne()
            .then(result => grafikData.casesData = result)
            .catch(err => console.log(err));

}

export default main;