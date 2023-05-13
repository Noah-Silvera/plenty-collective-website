import Quote from "@/components/sections/Quote";
import BaseContent from "./BaseContent";

export default class QuoteContent extends BaseContent {
  constructor({author, text, type}) {
    super()

    this.author = author;
    this.text = text;
    this.type = type
  }

  toJSON(){
    return {
      type: this.type,
      author: this.author,
      text: this.text
    }
  }

  static fromJSON(json){
    return new QuoteContent(json)
  }

  static buildFromContentfulFields(fields, type) {
    return new QuoteContent({
      author: fields.author,
      text: fields.content,
      type: type
    })
  }

  static ReactComponent = Quote
}
