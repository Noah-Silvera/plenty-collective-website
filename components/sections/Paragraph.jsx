import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function Paragraph({ content }){
  return <section>
    <h2>{content.header}</h2>
    {documentToReactComponents(content.document)}
  </section>
}
