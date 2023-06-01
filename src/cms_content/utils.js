export class ImageJSON {
  static buildFromContentfulFields(fields) {
    return {
      description: fields.description,
      url: `https://${fields.file.url}`,
      width: fields.file.details.image.width,
      height: fields.file.details.image.height,
    }
  }

  static imagePositionToString(positionInteger){
    switch(positionInteger) {
      case 1:
        return 'left'
      case 2:
        return 'top'
      case 3:
        return 'right'
      case 4:
        return 'bottom'
    }
  }
}
