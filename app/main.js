import ImageController from "./controllers/image-controller.js";
import QuoteController from "./controllers/quote-controller.js";
import TodoController from "./controllers/todo-controller.js";
import WeatherController from "./controllers/weather-controller.js";
class App {
  constructor() {
    this.imageController = new ImageController();
    this.quoteController = new QuoteController();
    this.todoController = new TodoController();
    this.weatherController = new WeatherController();
  }
}

window["app"] = new App();