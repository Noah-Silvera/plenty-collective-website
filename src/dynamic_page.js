
import PageContent from "./cms_content/PageContent";
import Page from "@/components/Page";
import { fetchPageByUrl, fetchAllPages, fetchNavbarOrder } from "./server/cms_content_fetcher";

export default function DynamicPage({ pageJSON }) {
  let pageContent = PageContent.fromJSON(pageJSON);

  return (
    <Page content={pageContent}/>
  )
}

export async function generatePageProps(pageUrl) {
  let content = await fetchPageByUrl(pageUrl)
  let pages = await fetchAllPages()

  let navbarOrder = await fetchNavbarOrder()

  pages = pages.sort((page1, page2) => {
    if(navbarOrder.indexOf(page1.urlPath) < navbarOrder.indexOf(page2.urlPath)){
      return -1;
    }

    if(navbarOrder.indexOf(page1.urlPath) > navbarOrder.indexOf(page2.urlPath)){
      return 1;
    }

    if(navbarOrder.indexOf(page1.urlPath) === navbarOrder.indexOf(page2.urlPath)){
      return 0;
    }
  })

  return {
    props: {
      pageJSON: content.toJSON(),
      pages: pages
    }
  }
}
