import weatherService from "../services/weather-service.js";
import store from "../store.js";

function _drawWeather() {
  console.log("THE WEATHER MAN SAYS:", store.State.weather);

  document.getElementById('weather').innerHTML = store.State.weather.Template
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", _drawWeather);
    weatherService.getWeather();
  }
}