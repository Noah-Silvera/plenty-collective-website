
import PageContent from "./cms_content/PageContent";
import Page from "@/components/Page";

export default function DynamicPage({ pageJSON }) {
  let pageContent = PageContent.fromJSON(pageJSON);

  return (
    <Page content={pageContent}/>
  )
}
