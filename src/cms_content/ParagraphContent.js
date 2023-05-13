import Paragraph from "@/components/sections/Paragraph";
import BaseContent from "./BaseContent";

export default class ParagraphContent extends BaseContent {
  constructor({header, document, type}) {
    super()
    this.header = header;
    this.document = document;
    this.type = type
  }

  toJSON(){
    return {
      type: this.type,
      header: this.header || null,
      document: this.document
    }
  }

  static fromJSON(json){
    return new ParagraphContent(json)
  }

  static buildFromContentfulFields(fields, type) {
    return new ParagraphContent({header: fields.header, document: fields.content, type: type})
  }

  static ReactComponent = Paragraph
}
