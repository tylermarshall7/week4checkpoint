export default class Quote {
  constructor(data) {
    console.log('[RAW QUOTE API DATA]', data);

    this.body = data.body
    this.author = data.author
  }

  get Template() {
    return /*html*/ `
        <div class="quote text-white"><span>'${this.body}'</span>
            <h1><br><i>-${this.author}</i></h1>
        </div>
    `
  }
}