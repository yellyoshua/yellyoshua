import { ButtonLink, Text } from "@/components/index"
import { useAppStore } from "@/flux/store"

export function GridProjects() {
  const { projects } = useAppStore(state => ({ projects: state.projects }))

  return <div className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {
      projects.map((project, index) => {
        return <div key={index} className="relative flex justify-center">
          <img className="w-full h-80" src={project.imageURL} alt={project.name} />
          <div className="absolute bg-black top-0 left-0 right-0 bottom-0 bg-opacity-80 w-full h-full grid place-items-center sm:my-auto">
            <div className="text-center py-6">
              <h1 className="uppercase text-base font-bold font-arvo text-white">
                {project.name}
              </h1>
              <Text className="text-sm text-center break-words w-36 py-3 font-light m-auto text-white">
                {project.description}
              </Text>
              <div className="w-full my-3">
                <Text className={`text-xs text-white m-auto ${project.development ? "bg-red-600" : "bg-green-600"} w-max px-1 py-1 leading-none`}>
                  {project.development ? "Proyecto en desarrollo" : "Proyecto terminado"}
                </Text>
              </div>

              <ButtonLink
                external={project.isExternalLink}
                className="px-3 py-1 m-auto uppercase font-semibold border-2 border-white text-white hover:bg-white hover:text-black"
                to={project.projectPath}
                text="Ver proyecto"
              />
            </div>
          </div>
        </div>
      })
    }
  </div>
}