import { useEffect } from "react"
import { Layout, Projects, SortResumeAboutMe } from 'src/ui/index'
import { getAllProjects } from '@/app/flux/actions'

export default function IndexPage() {
  useEffect(() => {
    getAllProjects()
  }, [])

  return <Layout>
    <SortResumeAboutMe />
    <Projects />
  </Layout>
}
