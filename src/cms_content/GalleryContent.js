import Gallery from "@/components/sections/Gallery";
import BaseContent from "./BaseContent";

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
      images: fields.images.map((image) => {
        return {
          description: image.fields.description,
          url: `https://${image.fields.file.url}`,
          width: image.fields.file.details.image.width,
          height: image.fields.file.details.image.height,
        }
      }),
      type: type
    })
  }

  static ReactComponent = Gallery
}
