export default function Quote({ content }){
  return <section>
    <h2 className="text-3xl">{content.text}</h2>
    <p className="text-xl">- {content.author}</p>
  </section>
}
