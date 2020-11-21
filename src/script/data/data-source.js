class DataAPI {
    
    static covidData(country = false){
        const url = (country) ? `https://covid19.mathdro.id/api/countries/${country}` : 'https://covid19.mathdro.id/api';

        return fetch(url)
                .then(res => res.json())
                .then(result => {
                    if(!result.error){
                        return Promise.resolve(result);
                    } else {
                        return Promise.reject(result);
                    }
                })
    }

    static dataCasesProvince(){
        const url = 'https://cors-anywhere.herokuapp.com/api.kawalcorona.com/indonesia/provinsi';

        return fetch(url)
                .then(res => res.json())
                .then(result => Promise.resolve(result))
                .catch(err => Promise.reject(err));
    }

    static getCasesFromDayOne(){
        const url = 'https://api.covid19api.com/dayone/country/indonesia/status/confirmed/live';

        return fetch(url, {method: 'GET', redirect: 'follow'})
                .then(res => res.json())
                .then(result => Promise.resolve(result))
                .catch(err => Promise.reject(err));
    }

}

export default DataAPI;