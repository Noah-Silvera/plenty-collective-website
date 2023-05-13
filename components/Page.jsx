import { createElement } from "react"
import classNames from "classnames"

export default function Page({ content }){
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
        return (
          <div key={idx}
            className={classNames(
              "bg-cover",
              "bg-no-repeat",
              "bg-center",
              "flex",
              "justify-center",
              "items-center"
            )}
            style={{backgroundImage: idx % 2 == 0 ? `url(${cloudImageUrls[((idx/2) + startingCloudImageIndex) % cloudImageUrls.length]})`: 'none'}}
          >
            {createElement(section.constructor.ReactComponent, {content: section, idx: idx})}
          </div>
        )
      })}
    </main>
  )
}
