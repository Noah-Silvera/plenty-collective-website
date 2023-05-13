import Image from "next/image"

export default function Gallery({ content }){
  return <section className="max-w-full flex flex-wrap justify-center gap-8 max-w-7xl px-8 py-8">
    {content.images.map((image, idx) => {
      return (
        <div key={idx}>
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
            alt={image.description}
            className="max-w-full sm:max-w-[24rem]"
          ></Image>
        </div>
      )
    })}
  </section>
}
