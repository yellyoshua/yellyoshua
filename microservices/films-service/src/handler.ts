import movies from "./api/movies.json"

export async function handlerMovies(_: Request): Promise<Response> {
  return new Response(JSON.stringify(movies))
}

export async function handlerServerError(_: Request): Promise<Response> {
  return new Response("Error with the server", { status: 500 })
}