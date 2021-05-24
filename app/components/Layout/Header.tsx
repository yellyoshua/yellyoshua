import Link from "next/link"
import { useRouter } from "next/router"
import Logotipo from "@/components/Logotipo";
import SeparateLine from "@/components/SeparateLine";

const navLinks = [
  { text: "Home", to: "/" },
  { text: "Servicios", to: "/services" },
  { text: "Acerca", to: "/about-me" },
  { text: "Blog", to: "/blog" },
]

export default function Header() {
  const router = useRouter()
  const currentPath = router.pathname

  return <header className="bg-white w-full">
    <div className="w-full justify-center py-3 flex mx-auto">
      <Link href="/">
        <a className="border-black pb-3 ">
          <Logotipo variant="dark" />
        </a>
      </Link>
    </div>
    <nav className="w-full flex flex-row justify-center mb-3">
      {
        navLinks.map((navLink, index) => (
          <div key={index} className="px-2">
            <Link href={navLink.to}>
              <a className={`uppercase border-b-2 font-arvo antialiased text-xs md:text-sm
                  ${currentPath.includes(navLink.to) ? "font-bold border-black text-black" : "font-light text-gray-500"} 
              border-transparent hover:text-black hover:border-black transition-all`}>
                {navLink.text}
              </a>
            </Link>
          </div>
        ))
      }
    </nav>
    <SeparateLine size="25" />
  </header>
}