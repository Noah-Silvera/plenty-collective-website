export default function Quote({ content }){
  return <section>
    <h2>{content.text}</h2>
    <p>{content.author}</p>
  </section>
}
