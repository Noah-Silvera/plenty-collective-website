import Paragraph from "./sections/Paragraph"
import Quote from "./sections/Quote"
import { createElement } from "react"

export default function Page({ content }){
  const sectionComponentLookup = {
    "ParagraphContent": Paragraph,
    "QuoteContent": Quote
  }

  return (
    <main>
      <h1 className="text-4xl pb-8 pt-4">{content.title}</h1>
      <div className="space-y-4">
      {content.sections.map((section) => {
        return createElement(eval(sectionComponentLookup[section.type]), {content: section});
      })}
      </div>
    </main>
  )
}
