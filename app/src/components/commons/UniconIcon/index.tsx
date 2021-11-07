
type UniconIconProps = {
  uniconIcon: string,
  className?: string
}

export function UniconIcon({ uniconIcon, className }: UniconIconProps) {
  return uniconIcon.length ? <i className={`${uniconIcon} ${className}`}></i> : null
}