import Gallery from "@/components/sections/Gallery";
import BaseContent from "./BaseContent";
import { ImageJSON } from "./utils";

export default class GalleryContent extends BaseContent{
  constructor({images, type}) {
    super()

    this.type = type
    this.images = images;
  }

  toJSON(){
    return {
      type: this.type,
      images: this.images,
    }
  }

  static fromJSON(json){
    return new GalleryContent(json)
  }

  static buildFromContentfulFields(fields, type) {
    return new GalleryContent({
      images: fields.images.map((image) => ImageJSON.buildFromContentfulFields(image.fields)),
      type: type
    })
  }

  static ReactComponent = Gallery
}
