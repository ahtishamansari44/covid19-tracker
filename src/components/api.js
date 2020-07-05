import axios from 'axios'

export const fetchGlobalData = async () => {
        try{
        const {data: {confirmed, recovered, deaths}} = await axios.get('https://covid19.mathdro.id/api');
        return {confirmed: confirmed.value, active: (confirmed.value-(recovered.value+deaths.value)) ,recovered: recovered.value, deaths: deaths.value}
        }
        catch(error){

        }
}

export const fetchAllCountry = async () => {
        try{
        const {data: {countries}} = await axios.get('https://covid19.mathdro.id/api/countries/');
        console.log(countries)
        return countries.map((country) => country.name )

       }
        catch(error){

        }
}

let url = 'https://covid19.mathdro.id/api'
export const fetchCountryData = async (country) => {
        let changeURL = url;
        if(country){
                changeURL = `${url}/countries/${country}`;
        }
        try{
        const {data: {confirmed, recovered, deaths}} = await axios.get(changeURL);
        return {confirmed: confirmed.value, active: (confirmed.value-(recovered.value+deaths.value)) ,recovered: recovered.value, deaths: deaths.value}
        }
        catch(error){

        }
}