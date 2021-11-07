import { useRouter } from 'next/router'
import { FC, useEffect, useState, } from 'react'
import { useFormik } from 'formik'
import { useSafeFetch } from 'src/hooks/useSafeFetch'
import { useAppStore } from 'src/flux/store'

type Props = {}

const SearchBackup: FC<Props> = () => {
  const router = useRouter()
  const { safeFetch, signal, controller } = useSafeFetch()

  const apiURL = useAppStore.getState().API_URL
  const [isSubmitting, setSubmitting] = useState(false)

  useEffect(() => {
    return () => controller?.abort()
  }, [])

  const search = useFormik({
    initialValues: { messagesId: "" },
    onSubmit: async ({ messagesId }) => {
      try {
        setSubmitting(true)
        if (messagesId.length === 0) {
          return setSubmitting(false)
        }

        const body = JSON.stringify({ messagesId })

        const res = await safeFetch(`${apiURL}/api/messages`, { method: "POST", body, signal })
        if (res.status !== 200) {
          return setSubmitting(false)
        }

        return router.push(`/messages/${messagesId}`)
      } catch (error) {
        return setSubmitting(false)
      }
    }
  })

  return <form className={`bg-white shadow p-4 flex ${isSubmitting && "animate-pulse"}`} onSubmit={search.handleSubmit}>
    <span className="w-auto flex justify-end items-center text-gray-500 p-2">
      <i className="uil uil-search text-3xl"></i>
    </span>
    <input
      disabled={isSubmitting}
      name="messagesId"
      onChange={search.handleChange}
      value={search.values.messagesId}
      className="w-full rounded p-2"
      type="text"
      placeholder="Pega tu c&oacute;digo"
    />
    <button disabled={isSubmitting} type="submit" className="bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4">
      <p className="font-semibold text-xs">Search</p>
    </button >
  </form >
}

export default SearchBackup