export default class BaseContent {
  toJSON(){
    throw "The toJSON method must be implemented for any content type. It should return the cms content in a serializable form."
  }

  static fromJSON(json){
    throw "The fromJSON method must be implemented for any content type. It should take the result of `toJSON` and turn it into a content object."
  }

  static buildFromContentfulFields(fields, type) {
    throw "The buildFromContentfulFields method must be implemented for any content type. It should take the contentful fields and contentful type and turn it into a content object. The contentful type should be used as the `type` property in the toJSON method."
  }
}
