export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    this.city = data.name
    this.kelvin = data.main.temp
    this.celcius = Math.round(data.main.temp - 273.15)
    this.fahrenheit = this.celcius * 1.8 + 32
  }
}

get WeatherTemplate() {
  return /*html*/ `
			<div class="col-2 border rounded shadow bg-transparent">
          <h5>${this.city}</h5>
          <h5>${this.tempInFahrenheit}°</h5>
			</div>
  `

}