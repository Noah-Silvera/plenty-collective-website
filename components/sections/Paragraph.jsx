import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import BoxShadowWrapper from './BoxShadowWrapper'
import classNames from 'classnames'

export default function Paragraph({ content, idx }){
  return <BoxShadowWrapper idx={idx}>
    <section className={classNames(
      "p-2",
      "sm:p-6",
      "flex",
      "flex-col",
      "gap-12",
      "sm:gap-16",
      {
        "md:flex-row": content.imagePosition == 'left',
        "md:flex-row-reverse": content.imagePosition == 'right'
      }
    )}>
       {content.image && (
        <img src={content.image.url}
          width={content.image.width}
          height={content.image.height}
          alt={content.description}
          className={classNames(
            "object-contain",
            "mx-auto",
            {
              "md:w-1/2": content.imagePosition == 'left' || content.imagePosition == 'right'
            }
          )}></img>
      )}
      <div className={classNames(
        {
          "my-auto": content.image
        }
      )}>
        {content.header && <h2 className="text-4xl text-center pb-4">{content.header}</h2>}
        <div className={classNames(
          "text-lg",
          "leading-8",
          "sm:leading-10",
          "tracking-wide",
          "font-libre-baskerville",
          "contentful-rich-text",
          {
            "sm:text-lg": content.image,
            "sm:text-xl": !content.image
          }
        )}>
          {documentToReactComponents(content.document)}
        </div>
      </div>
    </section>
  </BoxShadowWrapper>
}
