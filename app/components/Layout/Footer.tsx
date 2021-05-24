import { useAppStore } from '@/store/app'
import UniconIcon from '@/components/UniconIcon'
import { Tooltip } from '@/components/Tooltip/Tooltip'
import SeparateLine from '../SeparateLine'
import { useState } from 'react'
import DownArrow from '@/icons/svg/DownArrow'
import Link from 'next/link'

export default function Footer() {
  const { copyright, socialLinks } = useAppStore.getState()
  const [activeHover, setActiveHover] = useState(false)

  return <footer onMouseLeave={() => setActiveHover(false)} onMouseEnter={() => setActiveHover(true)} className="pt-10 sm:mt-10">
    <SeparateLine size="50" />
    <div className="py-3">
      <p className={`text-center text-black font-bold text-lg font-arvo uppercase antialiased`}>
        Redes sociales
      </p>
      <DownArrow className={`m-auto mt-10 mb-5 ${activeHover ? "text-black" : "text-gray-500"} fill-current animate-bounce`} />
    </div>

    <div className="w-full justify-center md:flex-auto md:flex-row-reverse pt-3 pb-7 flex-row flex">
      {socialLinks.map((social, index) => {
        return <Tooltip key={index} tooltip={social.name}>
          <a href={social.url} target="_blank" className="mx-1 text-center text-2xl p-2 rounded-sm hover:text-black transition-all text-gray-500">
            <UniconIcon uniconIcon={social.uniconIcon} />
          </a>
        </Tooltip>
      })}
    </div>

    <SeparateLine size="50" />
    <div className="py-5 text-center">
      <p className="italic select-none text-base font-arvo">"Primero en tu mente, luego en tu realidad"</p>
      <p className="text-center text-xs font-arvo">Todo empieza en la mente de alguien.</p>
    </div>

    <div className="flex justify-center select-none mt-3 mb-8">
      <a href="https://www.buymeacoffee.com/yellyoshua" target="_blank">
        <img className="transform transition-all skew-y-6 hover:scale-125" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="41" width="174" />
      </a>
    </div>

    <div className="my-3 flex justify-center select-none">
      <Link href="/yellyoshua">
        <a className="font-arvo border-2 px-2 py-2 font-bold text-gray-500 border-gray-500 hover:border-purple-700 hover:text-purple-700">@yellyoshua</a>
      </Link>
    </div>

    <div className="my-2">
      <p className="text-center text-gray-500 text-xs font-arvo font-light">© {copyright}</p>
    </div>
  </footer >
}