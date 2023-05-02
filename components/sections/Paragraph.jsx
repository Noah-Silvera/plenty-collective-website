import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function Paragraph({ content }){
  return <section className="mx-auto max-w-lg py-4">
    <h2 className="text-2xl text-center">{content.header}</h2>
    <div>
      {documentToReactComponents(content.document)}
    </div>
  </section>
}
