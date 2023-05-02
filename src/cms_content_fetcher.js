import contentfulClientFactory from "./contentful_client";
import { PAGE_ENTRIES } from "./contentful_client";

class Content {
  toJSON(){
    return {
      type: this.constructor.name
    }
  }

  static fromJSON(json){
    return new contentTypeLookupTable[json.type](json)
  }
}

export class PageContent extends Content{
  constructor({title, sections}) {
    super()
    this.title = title;
    this.sections = sections;
  }

  toJSON(){
    return {
      ...super.toJSON(),
      title: this.title,
      sections: this.sections.map((section) => section.toJSON())
    }
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

export class ParagraphContent extends Content {
  constructor({header, content}) {
    super()
    this.header = header;
    this.content = content;
  }

  toJSON(){
    return {
      ...super.toJSON(),
      header: this.header,
      content: {
        isContentfulDocument: true,
        value: this.content
      }
    }
  }

  static buildFromContentfulFields(fields) {
    return new ParagraphContent({header: fields.header, content: fields.content})
  }
}

export class QuoteContent extends Content {
  constructor({author, content}) {
    super()
    this.author = author;
    this.content = content;
  }

  toJSON(){
    return {
      ...super.toJSON(),
      author: this.author,
      content: this.content
    }
  }

  static buildFromContentfulFields(fields) {
    return new QuoteContent({author: fields.author, content: fields.content})
  }
}

const contentTypeLookupTable = {
  "PageContent": PageContent,
  "ParagraphContent": ParagraphContent,
  "QuoteContent": QuoteContent,
}

export async function fetchPage(name){
  let response = await contentfulClientFactory().getEntry(PAGE_ENTRIES[name])
  return PageContent.buildFromContentfulFields(response.fields)
}
