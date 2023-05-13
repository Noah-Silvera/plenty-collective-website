import { createElement } from "react"
import classNames from "classnames"

// This wrapper will wrap every other section in a cloud
function CloudWrapper({ idx, children }){
  const cloudImageUrls = [
    '/images/cloud-1.jpg',
    '/images/cloud-2.jpg',
    '/images/cloud-3.jpg',
    '/images/cloud-4.jpg',
  ]

  const startingCloudImageIndex = 3;

  return (
    <div className={classNames(
        "bg-cover",
        "bg-no-repeat",
        "bg-center",
        "flex",
        "justify-center",
        "items-center"
      )}
      style={{backgroundImage: idx % 2 == 0 ? `url(${cloudImageUrls[((idx/2) + startingCloudImageIndex) % cloudImageUrls.length]})`: 'none'}}
    >
      {children}
    </div>
  )
}

export default function Page({ content }){
  return (
    <main>
      {content.displayTitle && <h1 className="text-4xl pb-8 pt-8 font-libre-baskerville text-center">{content.title}</h1>}
      {content.sections.map((section, idx) => {
        return <CloudWrapper idx={idx} key={idx}>
          {createElement(
            section.constructor.ReactComponent,
            {content: section, idx: idx}
          )}
        </CloudWrapper>
      })}
    </main>
  )
}
