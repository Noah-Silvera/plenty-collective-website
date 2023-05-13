
import PageContent from "./cms_content/PageContent";
import Page from "@/components/Page";
import { fetchPageByUrl, fetchAllPages } from "./cms_content_fetcher";

export default function DynamicPage({ pageJSON }) {
  let pageContent = PageContent.fromJSON(pageJSON);

  return (
    <Page content={pageContent}/>
  )
}

export async function generatePageProps(pageUrl) {
  let content = await fetchPageByUrl(pageUrl)
  let pages = await fetchAllPages()

  return {
    props: {
      pageJSON: content.toJSON(),
      pages: pages
    }
  }
}
