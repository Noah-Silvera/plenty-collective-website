export class ImageJSON {
  static buildFromContentfulFields(fields) {
    return {
      description: fields.description,
      url: `https://${fields.file.url}`,
      width: fields.file.details.image.width,
      height: fields.file.details.image.height,
    }
  }
}
