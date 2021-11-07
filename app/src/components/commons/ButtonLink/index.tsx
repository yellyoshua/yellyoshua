import Link from 'next/link'
import { UniconIcon } from 'src/components/index'

type ButtonLinkProps = {
  to: string,
  text: string,
  className?: string,
  external?: boolean
}

export function ButtonLink({ to, text, className, external }: ButtonLinkProps) {
  const defaultStyle = "px-3 py-1 rounded font-semibold bg-gray-100 hover:bg-purple-600 hover:text-white text-gray-800"
  const linkStyle = `duration-200 ${className ? className : defaultStyle}`

  if (external) {
    return <a target="_blank" href={to} className={linkStyle}>
      <UniconIcon uniconIcon="uil uil-external-link-alt" className="px-1" />
      {text}
    </a>
  }

  return <Link href={to}>
    <a className={linkStyle}>
      {text}
    </a>
  </Link>
}