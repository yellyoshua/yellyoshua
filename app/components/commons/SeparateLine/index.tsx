
const STYLE_LINE_SIZE = {
  "25": "w-3/12",
  "50": "w-6/12",
  "75": "w-9/12"
}

const defaultSize = "25"

type SeparateLineType = {
  size?: keyof typeof STYLE_LINE_SIZE,
  className?: string,
  borderColor?: string
}

export function SeparateLine({ size, className, borderColor }: SeparateLineType) {
  const lineSize = size ? STYLE_LINE_SIZE[size] : STYLE_LINE_SIZE[defaultSize]
  const lineStyle = `mt-2 mb-6 border-b-2 ${borderColor ? borderColor : "border-gray-500"} ${lineSize} mx-auto`

  return <div className={`${className} ${lineStyle}`} />
}