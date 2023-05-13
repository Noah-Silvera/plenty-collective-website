export default function Quote({ content }){
  return <section className="p-4">
    <h2 className="text-4xl font-thin">&quot;{content.text}&quot;</h2>
    <p className="text-2xl pt-4 pl-[10%] font-regular font-liberation-sans">- {content.author}</p>
  </section>
}
