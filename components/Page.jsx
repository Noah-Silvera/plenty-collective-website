import Paragraph from "./sections/Paragraph"
import Quote from "./sections/Quote"
import { createElement } from "react"
import classNames from "classnames"

export default function Page({ content }){
  const sectionComponentLookup = {
    "ParagraphContent": Paragraph,
    "QuoteContent": Quote
  }

  const cloudImageUrls = [
    '/images/cloud-1.jpg',
    '/images/cloud-2.jpg',
    '/images/cloud-3.jpg',
    '/images/cloud-4.jpg',
  ]

  const startingCloudImageIndex = 3;

  return (
    <main>
      {content.displayTitle && <h1 className="text-4xl pb-8 pt-4">{content.title}</h1>}
      {content.sections.map((section, idx) => {
        let evenIndex = idx % 2 == 0;
        let oddIndex = idx % 2 == 1;

        return (
          <div key={idx}
            className={classNames(
              "bg-cover",
              "bg-no-repeat",
              "bg-center",
              "h-96",
              "flex",
              "justify-center",
              "items-center"
            )}
            style={{backgroundImage: evenIndex ? `url(${cloudImageUrls[(idx/2) % cloudImageUrls.length + startingCloudImageIndex]})`: 'none'}}
          >
            <div className={classNames(
              "w-[52rem]",
              "max-w-[90%]",
              "h-fit",
              "mx-auto",
              "py-4",
              "px-12",
              "m-4",
              "rounded-md",
              "drop-shadow-xl",
              {
                "bg-plenty-pink-300": evenIndex,
                "bg-plenty-purple-200": oddIndex,
                "bg-opacity-75": evenIndex,
                "bg-opacity-50": oddIndex
              })
            }>
              {createElement(eval(sectionComponentLookup[section.type]), {content: section})}
            </div>
          </div>
        )
      })}
    </main>
  )
}
