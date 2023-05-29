import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import BoxShadowWrapper from './BoxShadowWrapper'
import Image from 'next/image'

export default function Paragraph({ content, idx }){
  return <BoxShadowWrapper idx={idx}>
    <section className="p-4">
      <h2 className="text-4xl text-center">{content.header}</h2>
      <div className="text-xl sm:text-2xl leading-10 tracking-wide font-libre-baskerville">
        {documentToReactComponents(content.document)}
      </div>
      {content.image && <img src={content.image.url} width={content.image.width} height={content.image.height} alt={content.description}></img>}
    </section>
  </BoxShadowWrapper>
}
