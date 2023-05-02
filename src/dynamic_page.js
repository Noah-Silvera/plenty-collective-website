
import { PageContent } from "@/src/cms_content_fetcher";
import Page from "@/components/Page";

export default function DynamicPage({ pageJSON }) {
  let pageContent = PageContent.fromJSON(pageJSON);

  return (
    <Page content={pageContent}/>
  )
}
