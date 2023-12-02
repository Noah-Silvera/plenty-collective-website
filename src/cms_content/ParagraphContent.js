import Paragraph from "@/components/sections/Paragraph";
import BaseContent from "./BaseContent";
import { ImageJSON } from "./utils";

export default class ParagraphContent extends BaseContent {
  constructor({header, document, type, image, imagePosition, mobileOnly, desktopOnly}) {
    super()
    this.header = header;
    this.document = document;
    this.type = type
    this.image = image
    this.imagePosition = imagePosition
    this.mobileOnly = mobileOnly
    this.desktopOnly = desktopOnly
  }

  toJSON(){
    return {
      type: this.type,
      header: this.header || null,
      document: this.document,
      image: this.image,
      imagePosition: this.imagePosition,
      mobileOnly: this.mobileOnly,
      desktopOnly: this.desktopOnly,
    }
  }

  static fromJSON(json){
    return new ParagraphContent(json)
  }

  static buildFromContentfulFields(fields, type) {
    let image = !!(fields.image && fields.image.fields) ? ImageJSON.buildFromContentfulFields(fields.image.fields) : null;

    return new ParagraphContent({
      header: fields.header,
      document: fields.content || "",
      type: type,
      image: image,
      imagePosition: ImageJSON.imagePositionToString(fields.imagePosition),
      mobileOnly: fields.mobileOnly || false,
      desktopOnly: fields.desktopOnly || false,
    })
  }

  static ReactComponent = Paragraph
}
