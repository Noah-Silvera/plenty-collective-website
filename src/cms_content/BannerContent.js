import BaseContent from "./BaseContent";
import Banner from "@/components/sections/Banner";
import { ImageJSON } from "./utils";

export default class BannerContent extends BaseContent{
  constructor({image, type}) {
    super()

    this.type = type
    this.image = image
  }

  toJSON(){
    return {
      type: this.type,
      image: this.image,
    }
  }

  static fromJSON(json){
    return new BannerContent(json)
  }

  static buildFromContentfulFields(fields, type) {
    let image = !!(fields.image && fields.image.fields) ? ImageJSON.buildFromContentfulFields(fields.image.fields) : null;

    return new BannerContent({
      image: image,
      type: type
    })
  }

  static ReactComponent = Banner
}
