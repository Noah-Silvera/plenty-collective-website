import { createClient } from "contentful"

const contentfulClientFactory = () => createClient({
  "space": process.env.CONTENTFUL_SPACE_ID,
  "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
  "environment": "master"
})

export default contentfulClientFactory;

export const PAGE_ENTRIES = {
  "Home": "7xaFOgldr80ozeZWPXNixJ"
}
