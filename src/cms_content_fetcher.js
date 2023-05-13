import contentfulClientFactory from "./contentful_client";
import PageContent from "./cms_content/PageContent";

export async function fetchPageById(id){
  let response = await contentfulClientFactory().getEntry(id)
  return PageContent.buildFromContentfulFields(response.fields)
}

export async function fetchPageByUrl(urlPath){
  let response = await contentfulClientFactory().getEntries(            {
    content_type: "page",
  })
  let selectedPage = response.items.find((item) => item.fields.urlPath === urlPath)
  return PageContent.buildFromContentfulFields(selectedPage.fields)
}

export async function fetchAllPages(){
  let response = await contentfulClientFactory().getEntries(            {
    content_type: "page",
  })
  return response.items.filter((item) => !item.fields.isHomePage).map((item) => {
    return {
      urlPath: item.fields.urlPath,
      title: item.fields.title
    }
  })
}
