
type TooltipProps = {
  tooltip: string,
  children?: React.ReactNode
}

export function Tooltip({ tooltip, children }: TooltipProps) {
  return <div className="group cursor-pointer relative inline-block">{children}
    <div className="opacity-0 bg-black text-white text-center text-xs rounded-lg py-2 absolute right-0 z-10 group-hover:opacity-100 transition-all bottom-full px-2 pointer-events-none">
      {tooltip}
      <svg className="absolute text-black h-2 w-full right-0 top-full" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
    </div>
  </div>
}