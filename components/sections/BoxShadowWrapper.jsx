import classNames from "classnames"

export default function BoxShadowWrapper({ children, idx }){
  let evenIndex = idx % 2 == 0;
  let oddIndex = idx % 2 == 1;

  return (
    <div className={classNames(
      "w-[52rem]",
      "max-w-[90%]",
      "h-fit",
      "mx-auto",
      "py-4",
      "px-12",
      "my-24",
      "m-4",
      "rounded-md",
      "drop-shadow-xl",
      {
        "bg-plenty-pink-300": evenIndex,
        "bg-plenty-purple-200": oddIndex,
        "bg-opacity-75": evenIndex,
        "bg-opacity-50": oddIndex
      })
    }>{children}</div>
  )
}

