import Quote from "../models/quote.js";
import store from "../store.js"

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService {
  constructor() {
    this.getQuote()
  }

  getQuote() {
    _quoteApi.get('').then(res => {
      console.log(res.data.quote)
      store.commit('quote', new Quote(res.data.quote))
    }).catch(err => console.error(err))
  }
}

const quoteService = new QuoteService();
export default quoteService;
