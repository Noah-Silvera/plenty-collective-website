import { Splide, SplideSlide } from '@splidejs/react-splide';

function GallerySlides({ images }) {
  return images.map((image, idx) => {
    return (
      <SplideSlide key={idx}>
        <img
          src={image.url}
          width={image.width}
          height={image.height}
          alt={image.description}
          className="max-w-full sm:max-w-[24rem] mx-auto"
          ></img>
      </SplideSlide>
    )
  })
}

export default function Gallery({ content }){

  const defaultSplideOptions = {
    gap: '2rem'
  }

  return <section className="max-w-full max-w-7xl px-8 py-8">
    <Splide className="hidden xl:block" options={{
      ...defaultSplideOptions,
      perPage: 3,
    }}>
      <GallerySlides images={content.images}></GallerySlides>
    </Splide>
    <Splide className="hidden md:block xl:hidden"  options={{
      ...defaultSplideOptions,
      perPage: 2,
    }}>
      <GallerySlides images={content.images}></GallerySlides>
    </Splide>
    <Splide className="md:hidden"  options={{
      ...defaultSplideOptions,
      perPage: 1,
    }}>
      <GallerySlides images={content.images}></GallerySlides>
    </Splide>
  </section>
}
