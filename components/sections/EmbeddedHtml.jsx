import classNames from "classnames";

export default function EmbeddedHtml({ content }){
  return <div className={classNames("py-10", { "sm:hidden": content.mobileOnly, "hidden sm:block": content.desktopOnly })}
    dangerouslySetInnerHTML={{__html: content.html}}
  />
}
