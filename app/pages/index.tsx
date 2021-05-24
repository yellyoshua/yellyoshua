import Layout from '@/components/Layout/Layout'
import SeparateLine from '@/components/SeparateLine'
import UniconIcon from '@/components/UniconIcon'
import Projects from '@/ui/Projects'

const srcImage = "/assets/images/me-as-vector-005502.png"

export default function IndexPage() {
  return <Layout>
    <SortResumeAboutMe />
    <Projects />
  </Layout>
}

function SortResumeAboutMe() {
  return <div className="mb-11">
    <div className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 select-none mb-6">
      <div className="flex justify-center">
        <div className="shadow-2xl border-black border-2 p-1 rounded-md">
          <img className="border-black border-2 w-60 bg-white pb-6 rounded-md" src={srcImage} alt={srcImage} />
        </div>
      </div>
      <div className="flex m-auto pt-5 md:pt-0 md:m-0 place-items-center">
        <div className="text-left">
          <h1 className="font-arvo text-xl font-bold">
            I'm <a href="/yellyoshua" className="text-green-500 hover:underline">
              @yellyoshua
            </a>
          </h1>
          <p className="font-arvo text-xs mb-4 text-blue-600">Once upon a time</p>
          <h2 className="font-arvo text-lg w-60">Un joven autodidacta apasionado por el aprender constantemente cada d&iacute;a.</h2>
        </div>
      </div>
    </div>
    <SeparateLine size="25" borderColor="border-pink-600" className="mb-36" />
    <div className="flex justify-center">
      <UniconIcon uniconIcon="uil uil-cloud" className="fill-current text-blue-600" />
      <UniconIcon uniconIcon="uil uil-credit-card" className="fill-current text-green-500" />
      <UniconIcon uniconIcon="uil uil-fire" className="fill-current text-red-700" />
      <UniconIcon uniconIcon="uil uil-gift" className="fill-current text-pink-600" />
      <UniconIcon uniconIcon="uil uil-at" className="fill-current text-purple-600" />
    </div>
    <SeparateLine size="25" borderColor="border-pink-600" className="mt-36 mb-36" />
  </div>
}
