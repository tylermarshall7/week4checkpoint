export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    this.city = data.name
    this.kelvin = data.main.temp
    this.celcius = Math.round(data.main.temp - 273.15)
    this.fahrenheit = (this.celcius * 1.8 + 32).toFixed()
  }

  get Template() {
    return /*html*/ `
			<div class="weather text-red">
          <h1>${this.city}</h1>
          <h3>${this.fahrenheit}°F</h3>
			</div>
  `

  }

}