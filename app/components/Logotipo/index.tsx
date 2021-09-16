import styled, { css } from "styled-components"

const LOGO_STYLES = {
  milky: "white",
  dark: "black",
  damm: "red"
}

type LogotipoProps = {
  variant?: keyof typeof LOGO_STYLES
}

const TextLogo = styled.text.attrs({
  className: "font-arvo font-bold antialiased"
})`
font-size: 35;
border-style: "dotted";
${({ color }) => css`
  color: ${color};
  border-bottom: 15px ${color};
`}
`

export function Logotipo({ variant }: LogotipoProps) {
  let color = variant ? LOGO_STYLES[variant] : LOGO_STYLES["dark"]

  return <TextLogo color={color}> YELL</TextLogo>
}