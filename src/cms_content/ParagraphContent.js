import Paragraph from "@/components/sections/Paragraph";
import BaseContent from "./BaseContent";
import { ImageJSON } from "./utils";

export default class ParagraphContent extends BaseContent {
  constructor({header, document, type, image, imagePosition}) {
    super()
    this.header = header;
    this.document = document;
    this.type = type
    this.image = image
    this.imagePosition = imagePosition
  }

  toJSON(){
    return {
      type: this.type,
      header: this.header || null,
      document: this.document,
      image: this.image,
      imagePosition: this.imagePosition
    }
  }

  static fromJSON(json){
    return new ParagraphContent(json)
  }

  static buildFromContentfulFields(fields, type) {
    let image = !!fields.image ? ImageJSON.buildFromContentfulFields(fields.image.fields) : null;

    return new ParagraphContent({
      header: fields.header,
      document: fields.content,
      type: type,
      image: image,
      imagePosition: ImageJSON.imagePositionToString(fields.imagePosition)
    })
  }

  static ReactComponent = Paragraph
}
