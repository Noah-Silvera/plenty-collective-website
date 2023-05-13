import Paragraph from "./sections/Paragraph"
import Quote from "./sections/Quote"
import { createElement } from "react"
import classNames from "classnames"

export default function Page({ content }){
  const sectionComponentLookup = {
    "ParagraphContent": Paragraph,
    "QuoteContent": Quote
  }

  return (
    <main>
      {content.displayTitle && <h1 className="text-4xl pb-8 pt-4">{content.title}</h1>}
      {content.sections.map((section, idx) => {
        return (
          <div className={classNames(
            "bg-cover",
            "bg-no-repeat",
            "bg-center",
            "h-96",
            "flex",
            "justify-center",
            "items-center",
            {
              "bg-[url('/images/cloud-1.jpg')]": idx % 8 == 0,
              "bg-[url('/images/cloud-2.jpg')]": idx % 8 == 2,
              "bg-[url('/images/cloud-3.jpg')]": idx % 8 == 4,
              "bg-[url('/images/cloud-4.jpg')]": idx % 8 == 6,
            }
          )}>
            <div key={idx} className={classNames(
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
                "bg-plenty-pink-300": idx % 2 == 0,
                "bg-plenty-purple-200": idx % 2 == 1,
                "bg-opacity-75": idx % 2 == 0,
                "bg-opacity-50": idx % 2 == 1
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
