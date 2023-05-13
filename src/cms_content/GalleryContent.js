export default class GalleryContent {
  constructor({images}) {
    this.images = images;
  }

  toJSON(){
    return {
      type: this.constructor.name,
      images: this.images,
    }
  }

  static fromJSON(json){
    return new GalleryContent(json)
  }

  static buildFromContentfulFields(fields) {
    return new GalleryContent({images: fields.images.map((image) => {
      return {
        description: image.fields.description,
        url: `https://${image.fields.file.url}`,
        width: image.fields.file.details.image.width,
        height: image.fields.file.details.image.height,
      }
    })})
  }
}
