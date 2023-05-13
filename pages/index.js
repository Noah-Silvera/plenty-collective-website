import DynamicPage, { generatePageProps } from "@/src/dynamic_page";

export default DynamicPage;

export async function getStaticProps() {
  return generatePageProps("home")
}
