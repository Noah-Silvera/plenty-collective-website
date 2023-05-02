export default function Quote({ content }){
  return <section className="max-w-lg mx-auto py-4">
    <h2 className="text-3xl">{content.text}</h2>
    <p className="text-xl">- {content.author}</p>
  </section>
}
