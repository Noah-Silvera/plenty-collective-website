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
    <main className="pt-14">
      {content.displayTitle && <h1 className="text-4xl pb-8 pt-4">{content.title}</h1>}
      {content.sections.map((section, idx) => {
        return (
          <div key={idx} className={classNames(
            "max-w-2xl",
            "mx-auto",
            "py-4",
            "px-12",
            "m-4",
            "bg-opacity-50",
            "rounded-md",
            "drop-shadow-lg",
            {
              "bg-plenty-pink-300": idx % 2 == 0,
              "bg-plenty-purple-200": idx % 2 == 1
            })
          }>
            {createElement(eval(sectionComponentLookup[section.type]), {content: section})}
          </div>
        )
      })}
    </main>
  )
}
