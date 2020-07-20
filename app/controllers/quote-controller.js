import quoteService from "../services/quote-service.js";
import store from "../store.js"

function _drawQuote() {
    document.getElementById('quote').innerHTML = store.State.quote.QuoteTemplate
}
export default class QuoteController {

    constructor() {
        store.subscribe('quote', _drawQuote)
    }
}
