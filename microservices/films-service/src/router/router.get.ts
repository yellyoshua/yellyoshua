import { handlerMovies, handlerServerError } from "./../handler";
import { parseUrl } from "./../utils";

export const InstanceRouter = async (request: Request): Promise<Response> => {
  const rURL = parseUrl(request.url);

  switch (rURL) {
    case "/api/movies":
      return handlerMovies(request)
    default:
      return handlerServerError(request)
  }
}