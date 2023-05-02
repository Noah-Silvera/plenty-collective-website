import QuoteContent from "./QuoteContent";
import ParagraphContent from "./ParagraphContent";

export default class PageContent {
  constructor({title, sections}) {
    this.title = title;
    this.sections = sections;
  }

  toJSON(){
    return {
      type: this.constructor.name,
      title: this.title,
      sections: this.sections.map((section) => section.toJSON())
    }
  }

  static fromJSON(json){
    return new PageContent(json)
  }

  static buildFromContentfulFields(fields) {
    let sections = fields.sections.map((section) => {
      let contentTypeId = section.sys.contentType.sys.id
      switch(contentTypeId) {
        case 'paragraph':
          return ParagraphContent.buildFromContentfulFields(section.fields)
        case 'quote':
          return QuoteContent.buildFromContentfulFields(section.fields)
        default:
          throw new Error(`Unrecognized content type ${contentType}`)
      }
    })

    return new PageContent({title: fields.title, sections: sections})
  }
}
