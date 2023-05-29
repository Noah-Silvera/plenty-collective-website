import Paragraph from "@/components/sections/Paragraph";
import BaseContent from "./BaseContent";
import { ImageJSON } from "./utils";

export default class ParagraphContent extends BaseContent {
  constructor({header, document, type, image, displayImageOnRightSide}) {
    super()
    this.header = header;
    this.document = document;
    this.type = type
    this.image = image
    this.displayImageOnRightSide = displayImageOnRightSide
  }

  toJSON(){
    return {
      type: this.type,
      header: this.header || null,
      document: this.document,
      image: this.image,
      displayImageOnRightSide: this.displayImageOnRightSide
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
      displayImageOnRightSide: fields.displayImageOnRightSide
    })
  }

  static ReactComponent = Paragraph
}
