import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import BoxShadowWrapper from './BoxShadowWrapper'

export default function Paragraph({ content, idx }){
  return <BoxShadowWrapper idx={idx}>
    <section className="p-4">
      <h2 className="text-4xl text-center">{content.header}</h2>
      <div className="text-2xl leading-10 tracking-wide font-libre-baskerville">
        {documentToReactComponents(content.document)}
      </div>
    </section>
  </BoxShadowWrapper>
}
