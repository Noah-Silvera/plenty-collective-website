import BoxShadowWrapper from './BoxShadowWrapper'
import classNames from 'classnames'

export default function Banner({ content, idx }){
  return <BoxShadowWrapper idx={idx} className="!bg-white !bg-opacity-75">
    <section className={classNames(
      "flex",
      "flex-col",
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
      </div>
    </section>
  </BoxShadowWrapper>
}
