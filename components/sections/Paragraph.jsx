import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import BoxShadowWrapper from './BoxShadowWrapper'
import classNames from 'classnames'

export default function Paragraph({ content, idx }){
  return <BoxShadowWrapper idx={idx}>
    <section className={classNames(
      "p-6",
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
          className={classNames(
            "md:w-1/2",
            "md:py-4",
            {
              "md:pr-8": !content.displayImageOnRightSide,
              "md:pl-8": content.displayImageOnRightSide,
            }
          )}></img>
      )}
      <div className={classNames(
        "px-8",
        {"py-6": content.image},
      )}>
        {content.header && <h2 className="text-4xl text-center pb-4">{content.header}</h2>}
        <div className="text-xl sm:text-2xl leading-10 tracking-wide font-libre-baskerville">
          {documentToReactComponents(content.document)}
        </div>
      </div>
    </section>
  </BoxShadowWrapper>
}
