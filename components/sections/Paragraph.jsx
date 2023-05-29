import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import BoxShadowWrapper from './BoxShadowWrapper'
import classNames from 'classnames'

export default function Paragraph({ content, idx }){
  return <BoxShadowWrapper idx={idx}>
    <section className={classNames(
      "p-4",
      "flex",
      "flex-col",
      {
        "md:flex-row": !content.displayImageOnRightSide,
        "md:flex-row-reverse": content.displayImageOnRightSide
      }
    )}>
       {content.image && (
        <img src={content.image.url}
          width={content.image.width}
          height={content.image.height}
          alt={content.description}
          className=""></img>
      )}
      <div>
        <h2 className="text-4xl text-center">{content.header}</h2>
        <div className="text-xl sm:text-2xl leading-10 tracking-wide font-libre-baskerville">
          {documentToReactComponents(content.document)}
        </div>
      </div>
    </section>
  </BoxShadowWrapper>
}
