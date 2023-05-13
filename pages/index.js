import { fetchPageById } from "@/src/cms_content_fetcher"
import { PAGE_ENTRIES } from "@/src/contentful_client";
import DynamicPage from "@/src/dynamic_page";

export default DynamicPage;

export async function getStaticProps() {
  let content = await fetchPageById(PAGE_ENTRIES["Home"])

  return {
    props: {
      pageJSON: content.toJSON()
    }
  }
}
