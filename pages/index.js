import { fetchPage } from "@/src/cms_content_fetcher"
import DynamicPage from "@/src/dynamic_page";

export default DynamicPage;

export async function getStaticProps() {
  let content = await fetchPage("HOME")

  return {
    props: {
      pageJSON: content.toJSON()
    }
  }
}
