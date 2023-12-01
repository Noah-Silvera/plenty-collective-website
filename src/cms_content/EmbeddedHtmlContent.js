import BaseContent from "./BaseContent";
import EmbeddedHtml from "@/components/sections/EmbeddedHtml";

export default class EmbeddedHtmlContent extends BaseContent{
  constructor({html, title, type}) {
    super()

    this.type = type
    this.html = html
    this.title = title;
  }

  toJSON(){
    return {
      type: this.type,
      html: this.html,
      title: this.title,
    }
  }

  static fromJSON(json){
    return new EmbeddedHtmlContent(json)
  }

  static buildFromContentfulFields(fields, type) {
    return new EmbeddedHtmlContent({
      html: fields.html,
      title: fields.title,
      type: type
    })
  }

  static ReactComponent = EmbeddedHtml
}
