import contentfulClientFactory from "./contentful_client";
import { PAGE_ENTRIES } from "./contentful_client";
import PageContent from "./cms_content/PageContent";

export async function fetchPage(name){
  let response = await contentfulClientFactory().getEntry(PAGE_ENTRIES[name])
  return PageContent.buildFromContentfulFields(response.fields)
}
