export default function EmbeddedHtml({ content }){
  return <div className="py-10"
    dangerouslySetInnerHTML={{__html: content.html}}
  />
}
