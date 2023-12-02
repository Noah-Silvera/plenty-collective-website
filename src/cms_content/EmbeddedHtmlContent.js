import BaseContent from "./BaseContent";
import EmbeddedHtml from "@/components/sections/EmbeddedHtml";

export default class EmbeddedHtmlContent extends BaseContent{
  constructor({html, title, type, mobileOnly, desktopOnly}) {
    super()

    this.type = type
    this.html = html
    this.title = title;
    this.mobileOnly = mobileOnly;
    this.desktopOnly = desktopOnly;
  }

  toJSON(){
    return {
      type: this.type,
      html: this.html,
      title: this.title,
      mobileOnly: this.mobileOnly,
      desktopOnly: this.desktopOnly,
    }
  }

  static fromJSON(json){
    return new EmbeddedHtmlContent(json)
  }

  static buildFromContentfulFields(fields, type) {
    return new EmbeddedHtmlContent({
      html: fields.html,
      title: fields.title,
      mobileOnly: fields.mobileOnly || false,
      desktopOnly: fields.desktopOnly || false,
      type: type
    })
  }

  static ReactComponent = EmbeddedHtml
}
