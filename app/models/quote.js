export default class Quote {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    this.body = data.body
    this.author = data.author
  }

  get QuoteTemplate() {
    return /*html*/ `
        <div class="quote text-white"><span class="quote-text">'${this.body}'</span>
            <p><br><i>-${this.author}</i></p>
        </div>
    `
  }
}