import axios from 'axios'
const WeatherAPIKey = 'e83db84d58aa72021e28b7c9aa80f12e'
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?id='
//const ROOT_URL = 'https://www.woolworths.com.au/shop/search/products?searchTerm='
export const FETCH_WEATHER = "FETCH_WEATHER"    //just a global const

export function fetchWeather(cityId) {    //note: export withou default keyword
    const url = `${ROOT_URL}${cityId}&APPID=${WeatherAPIKey}`
    //const url = `${ROOT_URL}${cityId}`
    const request = axios.get(url);    

    return {    //keep in mind that action is an object with "type" and "payload"
        type: FETCH_WEATHER,
        payload: request
    }

}