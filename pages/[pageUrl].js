import { fetchAllPages } from "@/src/cms_content_fetcher";
import DynamicPage from "@/src/dynamic_page";
import { generatePageProps } from "@/src/dynamic_page";

export default DynamicPage;

export async function getStaticPaths() {
  let pages = await fetchAllPages();

  return {
    paths: pages.map(({ urlPath }) => {
      return {
        params: {
          pageUrl: urlPath
        }
      }
    }),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  return generatePageProps(params.pageUrl)
}
