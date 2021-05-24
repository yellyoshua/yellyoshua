import { CSSProperties } from "react"

const LOGO_STYLES = {
  milky: "white",
  dark: "black",
  damm: "red"
}

const defaultStyle = "dark"

type LogotipoProps = {
  variant?: keyof typeof LOGO_STYLES
}

export default function Logotipo({ variant }: LogotipoProps) {
  let color = variant ? LOGO_STYLES[variant] : LOGO_STYLES[defaultStyle]

  const applyStyle = (): CSSProperties => ({
    fontSize: 35,
    color: color,
    borderBottom: `15px ${color}`,
    borderStyle: "dotted"
  })

  return <p className="font-arvo font-bold antialiased" style={applyStyle()}> YELL</p >
}