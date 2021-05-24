
type UniconIconProps = {
  uniconIcon: string,
  className?: string
}

export default function UniconIcon({ uniconIcon, className }: UniconIconProps) {
  return uniconIcon.length ? <i className={`${uniconIcon} ${className}`}></i> : null
}