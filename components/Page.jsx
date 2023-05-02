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
      <h1>{content.title}</h1>
      {content.sections.map((section) => {
        return createElement(eval(sectionComponentLookup[section.type]), {content: section});
      })}
    </main>
  )
}
