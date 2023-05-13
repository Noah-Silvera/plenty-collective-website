import { createElement } from "react"
import classNames from "classnames"

// This wrapper will wrap every other section in a cloud
function CloudWrapper({ idx, children, startWithCloud }){
  const displayCloud = (idx) => {
    return startWithCloud ? idx % 2 == 0 : idx % 2 == 1
  }

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
      style={{backgroundImage: displayCloud(idx) ? `url(${cloudImageUrls[(Math.floor(idx/2) + startingCloudImageIndex) % cloudImageUrls.length]})`: 'none'}}
    >
      {children}
    </div>
  )
}

export default function Page({ content }){
  return (
    <main>
      {content.displayTitle && (
        <h1 className="text-4xl sm:text-5xl
          py-24
          md:py-36
          font-cooper-hewitt
          text-center
          text-white
          tracking-widest
          bg-[url('/images/title-background.jpg')]
          bg-cover">
          <div className="drop-shadow-xl
            bg-plenty-purple-500
            bg-opacity-50
            mx-auto
            max-w-[90%]
            w-fit
            py-16
            px-16
            md:px-48
            rounded-xl
            drop-shadow-2xl"
          >
            {content.title}
          </div>
        </h1>
      )}
      {content.sections.map((section, idx) => {
        return <CloudWrapper idx={idx} key={idx} startWithCloud={!content.displayTitle}>
          {createElement(
            section.constructor.ReactComponent,
            {content: section, idx: idx}
          )}
        </CloudWrapper>
      })}
    </main>
  )
}
