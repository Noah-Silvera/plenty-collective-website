export default class ParagraphContent {
  constructor({header, document}) {
    this.header = header;
    this.document = document;
  }

  toJSON(){
    return {
      type: this.constructor.name,
      header: this.header || null,
      document: this.document
    }
  }

  static fromJSON(json){
    return new ParagraphContent(json)
  }

  static buildFromContentfulFields(fields) {
    return new ParagraphContent({header: fields.header, document: fields.content})
  }
}
