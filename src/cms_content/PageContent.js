import QuoteContent from "./QuoteContent";
import ParagraphContent from "./ParagraphContent";
import GalleryContent from "./GalleryContent";
import BaseContent from "./BaseContent";
import EmbeddedHtmlContent from "./EmbeddedHtmlContent";
import Banner from "./BannerContent";

export default class PageContent extends BaseContent{
  // Add any new types that need to be displayed in a page to this
  // mapping. The key corresponds to the type key in contentful and
  // the `type` property on the content object.
  static sectionTypeMap = {
    'paragraph': ParagraphContent,
    'quote': QuoteContent,
    'gallery': GalleryContent,
    'embeddedHtml': EmbeddedHtmlContent,
    'banner': Banner,
  }

  constructor({title, sections, displayTitle, isHomePage}) {
    super()

    this.title = title;
    this.displayTitle = displayTitle;
    this.sections = sections;
    this.isHomePage = isHomePage
  }

  toJSON(){
    return {
      type: this.constructor.name,
      title: this.title,
      displayTitle: this.displayTitle,
      isHomePage: this.isHomePage,
      sectionsJSON: this.sections.map((section) => section.toJSON())
    }
  }

  static fromJSON(json){
    json.sections = json.sectionsJSON.map((sectionJSON) => {
      if(!sectionJSON.type) {
        throw "Every section JSON should have a serialized `type` property correponding to a key in the `sectionTypeMap`"
      }

      return PageContent.sectionTypeMap[sectionJSON.type].fromJSON(sectionJSON)
    })
    return new PageContent(json)
  }

  static buildFromContentfulFields(fields) {
    let sections = fields.sections.map((section) => {
      let contentTypeId = section.sys.contentType.sys.id
      let contentType = this.sectionTypeMap[contentTypeId]

      if(contentType){
        return contentType.buildFromContentfulFields(section.fields, contentTypeId)
      } else {
        throw new Error(`Unrecognized content type ${contentType}`)
      }
    })

    return new PageContent({title: fields.title, sections: sections, displayTitle: fields.displayTitle, isHomePage: fields.isHomePage})
  }
}
