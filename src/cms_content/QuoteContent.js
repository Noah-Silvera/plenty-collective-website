export default class QuoteContent {
  constructor({author, text}) {
    this.author = author;
    this.text = text;
  }

  toJSON(){
    return {
      type: this.constructor.name,
      author: this.author,
      text: this.text
    }
  }

  fromJSON(json){
    return new QuoteContent(json)
  }

  static buildFromContentfulFields(fields) {
    return new QuoteContent({author: fields.author, text: fields.content})
  }
}
