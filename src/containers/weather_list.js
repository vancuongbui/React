import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Sparklines, SparklinesLine } from 'react-sparklines'

class WeatherList extends Component {
    renderWeather(cityData) {
        const cityName = cityData.city.name
        const countryName = cityData.city.country
        if (cityData.list) {
            const temps = cityData.list.map((weather) => weather.main.temp)
            //const pressure = cityData.list.map((weather) => weather.main.pressure)
            //const humidities = cityData.list.map((weather) => weather.main.humidity)
        }
        else {
            console.log("something wrong with document tree")
        }
        
        //const humidities = cityName.list.map(weather =>weather.main.humidity)
        //const presures = cityName.list.map(weather =>weather.main.presure)
        return (
            <tr key={cityName} >    
                <td>{cityName}</td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead> 
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Presure</th>
                        <th>Humidity</th>
                    </tr>                        
                </thead>

                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>

            </table>
        )
    }
 }

 function mapStateToProps(state) {
     return {weather: state.weather}    //state.weather with "weather" come from reducer_weather.js
 }
 //the above function can be shorten like following
 /*
 function mapStateToProps({weather}) {
     return {weather}
 }*/

 export default connect(mapStateToProps)(WeatherList)