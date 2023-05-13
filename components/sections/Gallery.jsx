import Image from "next/image"

export default function Gallery({ content }){
  return <section className="max-w-full grid grid-cols-3 gap-8">
    {content.images.map((image, idx) => {
      return (
        <div key={idx}>
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
            alt={image.description}
            className="max-w-full"
          ></Image>
        </div>
      )
    })}
  </section>
}
