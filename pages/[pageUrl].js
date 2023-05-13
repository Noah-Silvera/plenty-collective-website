import { fetchAllPageUrls, fetchPageByUrl } from "@/src/cms_content_fetcher";
import DynamicPage from "@/src/dynamic_page";

export default DynamicPage;

export async function getStaticPaths() {
  let pageUrls = await fetchAllPageUrls();

  return {
    paths: pageUrls.map((pageUrl) => {
      return {
        params: {
          pageUrl: pageUrl
        }
      }
    }),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  let content = await fetchPageByUrl(params.pageUrl)

  return {
    props: {
      pageJSON: content.toJSON()
    }
  }
}
